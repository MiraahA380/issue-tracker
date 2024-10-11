import NextLink from 'next/link';
import {Link as RadixLink} from "@radix-ui/themes";

interface Props {
    label: string;
    href: string;
}

const Link = ({label, href}: Props) => {
    return <NextLink href={href} passHref legacyBehavior>
        <RadixLink>{label}</RadixLink>
    </NextLink>;
}

export default Link;