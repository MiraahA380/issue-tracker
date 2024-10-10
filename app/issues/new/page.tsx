"use client";

import {Button, Callout, Text, TextField} from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {CreateIssueSchema} from "@/app/schemas";
import {Controller, useForm} from "react-hook-form";
import axios from "axios";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {AiFillInfoCircle} from "react-icons/ai";
import ErrorMessage from "@/app/components/ErrorMessage";
import Loading from "@/app/components/Loading";

type CreateIssueForm = z.infer<typeof CreateIssueSchema>

const NewIssuePage = () => {

    const router = useRouter();

    const [error, setError] = useState('');

    const [isSubmitting, setIsSubmitting] = useState(false)

    const {
        register,
        formState: {errors},
        handleSubmit,
        control
    } = useForm<CreateIssueForm>({resolver: zodResolver(CreateIssueSchema)})

    const onSubmit = handleSubmit(
        async (data) => {
            try {
                setIsSubmitting(true);

                await axios.post('/api/issues', data);

                router.push('/issues');

            } catch (error) {
                console.log(error);
                setError('Something went wrong. Try again later.');
            }
        }
    );

    return (<form onSubmit={onSubmit} className="max-w-xl space-y-5">
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
        <TextField.Root placeholder="Title" {...register('title')}>
            <TextField.Slot>
            </TextField.Slot>
        </TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
            render={({field}) => <SimpleMDE placeholder="Description" {...field}/>}
            name='description'
            control={control}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button>Create new issue {isSubmitting && <Loading/>}</Button>
    </form>);
}

export default NewIssuePage;
