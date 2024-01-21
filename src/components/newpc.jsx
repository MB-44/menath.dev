import Image from "next/image";
import Link from "next/link";
import SiteInfo from "../data/config/info";
// import ProfileImage from "../../public/assets/profile-pic.jpg"

const Title = () => {
    return(
        <div className="flex flex-col items-center justify-center">
            <p className="text-2xl md:text-3xl mb-4 font-semibold text-center textSecondaryTheme">
                Hi, I&apos;m Menath
            </p>
        </div>
    );
}

function NewProfileCard() {
    return(
        <div className="pt-5 md:pt-20 pb-5 md:pb-40">
            <div className="flex flex-row items-center justify-center">
                <Title/>
            </div>
        </div>
    );
}

export default NewProfileCard;