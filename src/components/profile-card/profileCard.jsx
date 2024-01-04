import React,{useState} from "react";
import profile_pic from "../../assets/profile-pic.jpg";
import AboutPage from "../../pages/about/about-page";
import ProjectsPage from "../../pages/projects/project-page";
import ColorSchemeToggle from "../colorSchemeToggle/colorSchemeToggle";
import "./profileCard.css"

function ProfileCard () {

    const [showAboutPage, setShowAboutPage] = useState(false);
    const [showProjectsPage, setShowProjectsPage] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false)

    const handleAboutButton = () => {
        setShowAboutPage(true);
        setShowProjectsPage(false); // hide projects only if visible
    };

    const handlgeProjectButton = () => {
        setShowProjectsPage(true)
        setShowAboutPage(false) // hide about only if visible
    };

    const handleModeToggle = () => {
        setIsDarkMode(!setIsDarkMode);
    }


    return (
        <div className="card">
            <div className="content">
            {showAboutPage ? (
                <AboutPage/>
                    ) : showProjectsPage ? (
                           <ProjectsPage/> 
                    ) : (
                    <>
                        <h2>Hi, I'm Menath</h2>
                        <h3>Also known as MB-44</h3>
                        <p>I'm a game developer</p>
                        
                        <div className="card_button">
                            <button className="about_button" onClick={handleAboutButton}>
                                About Menath
                            </button>
                            <button className="projects_button" onClick={handlgeProjectButton}>
                                Projects
                            </button>
                        </div>
                    </>
                )}
            </div>
                {!showAboutPage && !showProjectsPage && <img src={profile_pic} className="Img" alt="" />}
        </div>
    );
}

export default ProfileCard;