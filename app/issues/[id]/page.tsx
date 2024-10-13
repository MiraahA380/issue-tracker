import {Box, Grid} from "@radix-ui/themes";
import prisma from "@/prisma/client";
import {notFound} from "next/navigation";
import IssueDetails from "./IssueDetails";
import IssueEditButton from "./IssueEditButton";

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
                <IssueEditButton issueId={id}/>
            </Box>
        </Grid>
    );
}

export default IssueDetailPage;