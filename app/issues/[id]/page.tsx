import {Box, Button, Card, Flex, Grid, Heading, Text} from "@radix-ui/themes";
import prisma from "@/prisma/client";
import {notFound} from "next/navigation";
import {IssueStatusBadge} from "@/app/components/index";
import {CapitalizeFirstLetter} from "@/app/services/utilities";
import ReactMarkdown from 'react-markdown';
import {Pencil2Icon} from "@radix-ui/react-icons";
import Link from "next/link";

interface Props {
    params: { id: string };
}

const IssueDetailPage = async ({params: {id}}: Props) => {


    const issue = await prisma.issue.findUnique({
        where: {id: parseInt(id)}
    });

    if (!issue)
        notFound();

    return (
        <Grid columns={{initial: '1', md: '2'}}>
            <Box>
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
            </Box>
            <Box>
                <Flex>
                    <Button>
                        <Pencil2Icon/>
                        <Link href={`/issues/${id}/edit`}>
                            Edit issue
                        </Link>
                    </Button>
                </Flex>
            </Box>
        </Grid>
    );
}

export default IssueDetailPage;