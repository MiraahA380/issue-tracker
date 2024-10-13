import {Button, Flex} from "@radix-ui/themes";
import {TrashIcon} from "@radix-ui/react-icons";
import Link from "next/link";

const IssueDeleteButton = ({issueId}: {issueId: number}) => {
    return (
        <Flex>
            <Button color='red'>
                <TrashIcon/>
                <Link href={`/issues/${issueId}/delete`}>
                    Delete
                </Link>
            </Button>
        </Flex>
    );
}

export default IssueDeleteButton;