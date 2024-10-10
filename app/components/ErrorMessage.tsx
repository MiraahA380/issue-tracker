import {PropsWithChildren} from "react";
import {Text} from "@radix-ui/themes";

const ErrorMessage = ({children}: PropsWithChildren) => {

    if (!children) return null;

    console.log(children);

    return (<Text as='p' color='red'>{children}</Text>);
}

export default ErrorMessage;
