'use client';

import {AlertDialog, Button, Flex, Text} from "@radix-ui/themes";
import {TrashIcon} from "@radix-ui/react-icons";
import prisma from "@/prisma/client";
import {notFound, useRouter} from "next/navigation";
import axios from "axios";
import {MdOutlineDangerous} from "react-icons/md";
import {useState} from "react";
import {Spinner} from "@/app/components";

const IssueDeleteButton = ({issueId}: { issueId: string }) => {

    const [error, setError] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const router = useRouter();

    return (
        <>
            <AlertDialog.Root>
                <AlertDialog.Trigger>
                    <Button color='red' disabled={isDeleting}>
                        <TrashIcon/>
                        <Text>Delete Issue</Text>
                        {isDeleting && <Spinner/>}
                    </Button>
                </AlertDialog.Trigger>
                <AlertDialog.Content>
                    <AlertDialog.Title>
                        Confirm deletion!
                    </AlertDialog.Title>
                    <AlertDialog.Description>
                        Are you sure you want to delete this issue? This action cannot be
                        undone!
                    </AlertDialog.Description>
                    <AlertDialog.Action>
                        <Flex gap="2" mt='4'>
                            <Button variant='soft' color='gray'>Cancel</Button>
                            <Button color='red' onClick={async () => {
                                try {
                                    setIsDeleting(true);
                                    await axios.delete(`/api/issues/${issueId}`);

                                    router.push(`/issues`);

                                    router.refresh();
                                } catch (error) {
                                    setIsDeleting(false);
                                    setError(true);
                                }
                            }
                            }>Delete issue</Button>
                        </Flex>
                    </AlertDialog.Action>
                </AlertDialog.Content>
            </AlertDialog.Root>

            <AlertDialog.Root open={error}>
                <AlertDialog.Content>
                    <AlertDialog.Description>
                        Oops... An unexpected error occurred
                    </AlertDialog.Description>
                    <Button color='gray' mt='4' onClick={() => setError(false)}>Close</Button>
                </AlertDialog.Content>
            </AlertDialog.Root>
        </>
    );
}

export default IssueDeleteButton;