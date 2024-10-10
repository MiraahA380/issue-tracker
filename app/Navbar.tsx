"use client";

import {AiFillBug} from "react-icons/ai";
import Link from "next/link";
import classname from "classnames";
import {usePathname} from "next/navigation";

const Navbar = () => {

    const currentPath = usePathname();

    const links = [
        {
            label: "Dashboard",
            href: "/dashboard",
        },
        {
            label: "Issues",
            href: "/issues",
        }
    ];


    return (<div>
        <nav className="flex items-center space-x-5 h-14 border-b px-5 mb-5">
            <Link href="/">
                <AiFillBug/>
            </Link>
            <ul className="flex space-x-5">
                {links.map((link) => {
                    return <li key={link.href} className={
                        classname({
                            'transition-colors': true,
                            'text-zinc-500 hover:text-zinc-800': link.href !== currentPath,
                            'text-zinc-800': link.href === currentPath
                        })
                    }>
                        <Link href={link.href}>{link.label}</Link>
                    </li>
                })}
            </ul>
        </nav>
    </div>);
}

export default Navbar;
