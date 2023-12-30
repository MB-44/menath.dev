import React from "react";
import Header from "../../components/header/header";
import styles from "./home.module.css";
import ProfilePic from "../../assets/profile-pic.jpg";
// import { style } from "@mui/system";

function HomePage() {
    return (
        <>
        <Header />

        <div className={styles.card}>
            <div className={styles.content}>
                <h2>Hi, I'm Menath</h2>
                <h3>Also known as MB-44</h3>
                <p>I'm a game developer</p>
                <div className={styles.card_button}>
                    <button className={styles.about_button}>About Menath</button>
                    <button className={styles.projects_button}>Projects</button>
                </div>


            </div>
            
            <img src={ProfilePic} className={styles.Img} alt="" />
            
        </div>
        
        
        </>
    );
}

export default HomePage;