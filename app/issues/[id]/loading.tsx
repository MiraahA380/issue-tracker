import {Card, Flex} from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";

const LoadingIssueDetailPage = ()=> {
    return (
        <Card className='max-w-xl'>
            <Skeleton/>
            <Flex gap="2">
                <Skeleton width='3rem'/>
                <Skeleton width='5rem'/>
            </Flex>
            <Skeleton count={5}/>
        </Card>
    );
}

export default LoadingIssueDetailPage;