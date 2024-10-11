import {Button, Flex} from "@radix-ui/themes";
import {Pencil2Icon} from "@radix-ui/react-icons";
import Link from "next/link";

const IssueEditButton = ({issueId}: { issueId: string }) => {
    return (
        <>
            <Flex>
                <Button>
                    <Pencil2Icon/>
                    <Link href={`/issues/${issueId}/edit`}>
                        Edit issue
                    </Link>
                </Button>
            </Flex>
        </>
    );
}

export default IssueEditButton;