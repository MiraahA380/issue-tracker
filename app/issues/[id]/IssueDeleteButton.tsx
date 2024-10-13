import {AlertDialog, Button, Flex} from "@radix-ui/themes";
import {TrashIcon} from "@radix-ui/react-icons";
import Link from "next/link";

const IssueDeleteButton = ({issueId}: { issueId: number }) => {
    return (
        <Flex>
            <AlertDialog.Root>
                <AlertDialog.Trigger>
                    <Button color='red'>
                        <TrashIcon/>
                        <Link href={`/issues/${issueId}/delete`}>
                            Delete
                        </Link>
                    </Button>
                </AlertDialog.Trigger>
                <AlertDialog.Content>
                    <AlertDialog.Description>Are you sure you want to delete this issue? This action cannot be
                        undone!</AlertDialog.Description>
                    <AlertDialog.Action>
                        <Flex gap="2">
                            <Button variant='soft' color='gray'>Cancel</Button>
                            <Button color='red'>Delete issue</Button>
                        </Flex>
                    </AlertDialog.Action>
                </AlertDialog.Content>
            </AlertDialog.Root>
        </Flex>
    );
}

export default IssueDeleteButton;