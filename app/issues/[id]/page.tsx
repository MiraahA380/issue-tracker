import {Box, Flex, Grid} from "@radix-ui/themes";
import {notFound} from "next/navigation";
import IssueDetails from "./IssueDetails";
import IssueEditButton from "./IssueEditButton";
import IssueDeleteButton from "@/app/issues/[id]/IssueDeleteButton";
import api from "@/lib/axios";
import {AxiosError} from "axios";
import {Issue} from "@prisma/client";


const getIssue = async (id: number): Promise<Issue> => {

    console.log(id);

    try {

        const response = await api.get<{ data: Issue }>(`/issues/${id}`);
        return response.data.data;

    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(error.response?.data.message || 'API request failed');
        }
        throw new Error('An unexpected error occurred');
    }
}

const IssueDetailPage = async ({params: {id}}: { params: { id: string } }) => {

    const issue = await getIssue(parseInt(id));

    console.log(issue);

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
                    <IssueDeleteButton issueId={id}/>
                </Flex>
            </Box>
        </Grid>
    );
}

export default IssueDetailPage;