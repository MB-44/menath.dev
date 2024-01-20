import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram, FaArrowRight} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import WebLinks from "../data/constants/links";
import SiteInfo from "../data/config/info";

export default function SocialToggle() {
    const iconSize = 20;
    
    return(
        <div className="flex flex-row items-center justify-center">
            <Link
                href = {`${WebLinks.instargram}`}
                target = "_blank"
                rel = "noopener noreferrer"
                className = "mr-4 textButtonTheme transitionButtonTheme"
                arial-label = {`Visit Instargram profile ${SiteInfo.userName}`}
                >
                    <FaInstagram size={iconSize}/>
            </Link>

            <Link
                href = {`${WebLinks.twitter}`}
                target = "_blank"
                rel = "noopener noreferrer"
                className = "mr-4 textButtonTheme transitionButtonTheme"
                arial-label = {`Visit Twitter profile ${SiteInfo.userName}`}
                >
                    <FaTwitter size={iconSize}/>
            </Link>

            <Link
                href = {`${WebLinks.github}`}
                target = "_blank"
                rel = "noopener noreferrer"
                className = "mr-4 textButtonTheme transitionButtonTheme"
                arial-label = {`Visit Github profile ${SiteInfo.userName}`}
                >
                    <FaGithub size={iconSize}/>
            </Link>

            <Link
                href = {`${WebLinks.linkedin}`}
                target = "_blank"
                rel = "noopener noreferrer"
                className = "mr-4 textButtonTheme transitionButtonTheme"
                arial-label = {`Visit Linkedin profile ${SiteInfo.userName}`}
                >
                    <FaLinkedinIn size={iconSize}/>
            </Link> 
        </div>
    );
}