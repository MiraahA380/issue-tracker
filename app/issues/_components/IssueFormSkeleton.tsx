import {Box} from "@radix-ui/themes";
import {Skeleton} from "@/app/components";

const IssueFormSkeleton = () => {
    return (
        <Box className="max-w-xl">
            <div className='mb-5'>
                <Skeleton height='2rem'/>
            </div>
            <div className='mb-10'>
                <Skeleton height='22rem'/>
            </div>
            <Skeleton height='2rem' width='9rem'/>
        </Box>
    );
}

export default IssueFormSkeleton;