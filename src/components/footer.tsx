import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import WebLinks from "../data/constants/links";

const Footer = () => {
    return(
        <div>
            <div className="flex flex-col gap-2 justify-center items-center pb-5 pt-5 outline outline-1 footerTheme">
                <p className="text-sm textTheme">
                    @ 2024 Menath.dev. All rights reserved.
                </p>
                <p className="text-sm textTheme">
                    Test Version
                </p>
                <Link
                    href={WebLinks.gitRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm rounded-xl px-4 py-1 cardTheme textButtonTheme transitionButtonTheme"
                    aria-label="View Source Code on Github"
                    >
                        <div className="flex items-center">
                            <p>View Source</p>
                            <FaGithub className="ml-2"/>
                        </div>
                </Link>
            </div>
        </div>
    );
}

export default Footer;