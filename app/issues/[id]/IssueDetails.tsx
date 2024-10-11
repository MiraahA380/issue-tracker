import {Card, Flex, Heading, Text} from "@radix-ui/themes";
import {CapitalizeFirstLetter} from "@/app/services/utilities";
import {IssueStatusBadge} from "@/app/components";
import ReactMarkdown from "react-markdown";
import {Issue} from "@prisma/client";

const IssueDetails = ({issue}: { issue: Issue }) => {
    return (
        <>
            <Heading>{CapitalizeFirstLetter(issue.title)}</Heading>
            <Flex gap="2">
                <IssueStatusBadge status={issue.status}/>
                <Text as='p'>{issue.created_at.toDateString()}</Text>
            </Flex>
            <Card className='mt-4 prose'>
                <ReactMarkdown>
                    {issue.description}
                </ReactMarkdown>
            </Card>
        </>
    );
}

export default IssueDetails;