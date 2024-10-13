"use client";

import {Button, Callout, TextField} from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {IssueSchema} from "@/app/schemas";
import {Controller, useForm} from "react-hook-form";
import axios from "axios";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {AiFillInfoCircle} from "react-icons/ai";
import {ErrorMessage, Loading} from "@/app/components/index";
import {Issue} from "@prisma/client";
import SimpleMDE from "react-simplemde-editor";


type IssueFormData = z.infer<typeof IssueSchema>

const IssueForm = ({issue}: { issue?: Issue }) => {

    const router = useRouter();

    const [error, setError] = useState('');

    const [isSubmitting, setIsSubmitting] = useState(false)

    const {
        register,
        formState: {errors},
        handleSubmit,
        control
    } = useForm<IssueFormData>({resolver: zodResolver(IssueSchema)})

    const onSubmit = handleSubmit(
        async (data) => {
            try {
                setIsSubmitting(true);

                if (issue)
                    await axios.patch(`/api/issues/${issue.id}`, data)
                else
                    await axios.post('/api/issues', data);

                router.push('/issues');

                router.refresh();

            } catch (error) {
                console.log(error);
                setError('Something went wrong. Try again later.');
            }
        }
    );

    return (
        <form onSubmit={onSubmit} className="max-w-xl space-y-5">
            {
                error &&
                <Callout.Root color='red'>
                    <Callout.Icon>
                        <AiFillInfoCircle/>
                    </Callout.Icon>
                    <Callout.Text>
                        {error}
                    </Callout.Text>
                </Callout.Root>
            }
            <TextField.Root defaultValue={issue?.title} placeholder="Title" {...register('title')}>
                <TextField.Slot>
                </TextField.Slot>
            </TextField.Root>
            <ErrorMessage>{errors.title?.message}</ErrorMessage>
            <Controller
                defaultValue={issue?.description}
                render={({field}) => <SimpleMDE placeholder="Description" {...field}/>}
                name='description'
                control={control}
            />
            <ErrorMessage>{errors.description?.message}</ErrorMessage>
            <Button>
                {issue ? 'Update issue' : 'Create new issue'}
                {isSubmitting && <Loading/>}</Button>
        </form>
    );
}

export default IssueForm;
