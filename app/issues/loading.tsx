import {Box, Flex, Table, Text} from "@radix-ui/themes";
import {Skeleton} from '../components/index';
import IssuesHeaderActions from "@/app/issues/IssuesHeaderActions";

const LoadingIssuePage = async () => {

    const issues = [1, 2, 3, 4, 5];

    return (
        <Box as='div' className='space-y-5'>
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
                        <Table.Row key={issue}>
                            <Table.Cell>
                                <Skeleton/>
                                <Text as="div" className="md:hidden">
                                    <Flex gap="2">
                                        <Skeleton width="2rem"/>
                                        <Skeleton width="5rem"/>
                                    </Flex>
                                </Text>
                            </Table.Cell>
                            <Table.Cell className='hidden md:table-cell'>
                                <Skeleton/>
                            </Table.Cell>
                            <Table.Cell className='hidden md:table-cell'>
                                <Skeleton/>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </Box>
    );
}

export default LoadingIssuePage;

