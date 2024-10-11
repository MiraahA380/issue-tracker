import {Skeleton} from "@/app/components/index";
import {Box} from "@radix-ui/themes";

const LoadingNewIssuePage = () => {

    return (
        <Box className="max-w-xl space-y-5">
            <Skeleton/>
            <Skeleton/>
            <Skeleton width='5rem' height='3rem'/>
        </Box>
    );
}

export default LoadingNewIssuePage;
