import {Flex, Table, Text} from "@radix-ui/themes";
import prisma from "@/prisma/client";
import IssuesHeaderActions from "@/app/issues/IssuesHeaderActions";
import {Link, IssueStatusBadge} from "@/app/components/index"

const IssuesPage = async () => {

    const issues = await prisma.issue.findMany();

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
                                            {issue.created_at.toDateString()}
                                        </Text>
                                    </Flex>
                                </Text>
                            </Table.Cell>
                            <Table.Cell className='hidden md:table-cell'>
                                <IssueStatusBadge status={issue.status}/>
                            </Table.Cell>
                            <Table.Cell className='hidden md:table-cell'>{issue.created_at.toDateString()}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </div>
    );
}

export const dynamic = 'force-dynamic';

export default IssuesPage;
