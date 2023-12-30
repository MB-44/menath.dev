import React from "react";
import Header from "../../components/header/header";
import styles from "./home.module.css";
import ProfilePic from "../../assets/profile-pic.jpg";

function HomePage() {
    return (
        <>
        <Header />

        <div className={styles.card}>
            <div className={styles.content}>
                <h2>Hi, I'm Menath</h2>
                <h3>Also known as MB-44</h3>
                <p>I'm a game developer</p>
            </div>
            
            <img src={ProfilePic} className={styles.Img} alt="" />
        </div>
        
        
        </>
    );
}

export default HomePage;