import {Box, Flex, Grid} from "@radix-ui/themes";
import prisma from "@/prisma/client";
import {notFound} from "next/navigation";
import IssueDetails from "./IssueDetails";
import IssueEditButton from "./IssueEditButton";
import IssueDeleteButton from "@/app/issues/[id]/IssueDeleteButton";

const IssueDetailPage = async ({params: {id}}: { params: { id: string } }) => {

    const issue = await prisma.issue.findUnique({
        where: {id: parseInt(id)}
    });

    if (!issue)
        notFound();

    return (
        <Grid columns={{initial: '1', md: '2'}} gapY='2'>
            <Box>
                <IssueDetails issue={issue}/>
            </Box>

            <Box>
                <Flex gap='2'>
                    <IssueEditButton issueId={id}/>
                    <IssueDeleteButton issueId={parseInt(id)}/>
                </Flex>
            </Box>
        </Grid>
    );
}

export default IssueDetailPage;