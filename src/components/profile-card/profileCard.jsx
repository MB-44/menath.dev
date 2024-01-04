import React, {useState} from "react";
import profile_pic from "../../assets/profile-pic.jpg";
import AboutPage from "../../pages/about/about-page";
import "./profileCard.css"

function ProfileCard () {

    const [showAboutPage, setShowAboutPage] = useState(false);
    // const [showProjectsPage,]

    const handleAboutButton = () => {
        setShowAboutPage(true);
    }


    return (
        <div className="card">
            <div className="content">
                {showAboutPage ? (
                    <AboutPage/>
                        ) : (
                    <>
                        <h2>Hi, I'm Menath</h2>
                        <h3>Also known as MB-44</h3>
                        <p>I'm a game developer</p>
                        
                        <div className="card_button">
                            <button className="about_button" onClick={handleAboutButton}>About Menath</button>
                            <button className="projects_button">Projects</button>
                        </div>
                    </>
                )}
            </div>
                {!showAboutPage && <img src={profile_pic} className="Img" alt="" />}
        </div>
    );
}

export default ProfileCard;