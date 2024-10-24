import {Flex, Table, Text} from "@radix-ui/themes";
import IssuesHeaderActions from "@/app/issues/IssuesHeaderActions";
import {Link, IssueStatusBadge} from "@/app/components/index"
import api from "@/lib/axios";
import {AxiosError} from "axios";
import {Issue} from "@prisma/client";

const getIssueList = async () => {
    try {
        const response = await api.get<{ data: Issue[] }>('/issues');
        return response.data.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(error.response?.data.message || 'API request failed');
        } else {
            throw new Error('An unexpected error occurred');
        }
    }
}

const IssuesPage = async () => {

    // const response = await api.get('/issues');

    const issues = await getIssueList();

    return (

        <div className='space-y-5 max-w-3xl'>
            <IssuesHeaderActions/>
            <Table.Root variant='surface'>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell className='hidden md:table-cell'>Created</Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {issues.map(issue => (
                        <Table.Row key={issue.id}>
                            <Table.Cell>
                                <Link href={`/issues/${issue.id}`} label={issue.title}/>
                                <Text as="div" className="md:hidden">
                                    <Flex gap="2">
                                        <IssueStatusBadge status={issue.status}/>
                                        <Text>
                                            {issue.created_at}
                                        </Text>
                                    </Flex>
                                </Text>
                            </Table.Cell>
                            <Table.Cell className='hidden md:table-cell'>
                                <IssueStatusBadge status={issue.status}/>
                            </Table.Cell>
                            <Table.Cell className='hidden md:table-cell'>{issue.created_at}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </div>
    );
}

export const dynamic = 'force-dynamic';

export default IssuesPage;
