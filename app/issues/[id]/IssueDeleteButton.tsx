'use client';

import {AlertDialog, Button, Flex, Text} from "@radix-ui/themes";
import {TrashIcon} from "@radix-ui/react-icons";
import prisma from "@/prisma/client";
import {notFound, useRouter} from "next/navigation";
import axios from "axios";

const IssueDeleteButton = ({issueId}: { issueId: string }) => {

    const router = useRouter();

    return (
        <Flex>
            <AlertDialog.Root>
                <AlertDialog.Trigger>
                    <Button color='red'>
                        <TrashIcon/>
                        <Text>Delete Issue</Text>
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

                                    await axios.delete(`/api/issues/${issueId}`);

                                    router.push(`/issues`);

                                    router.refresh();
                                } catch (error) {
                                    console.log(error);
                                }
                            }
                            }>Delete issue</Button>
                        </Flex>
                    </AlertDialog.Action>
                </AlertDialog.Content>
            </AlertDialog.Root>
        </Flex>
    );
}

export default IssueDeleteButton;