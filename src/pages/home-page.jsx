import React from "react";
import Header from "../../components/header/header";
import "./home-page.css";
import ProfileCard from "../../components/profile-card/profileCard";
// import { style } from "@mui/system";

function HomePage() {
    return (
        <>
        <Header />

        <ProfileCard />
        
        </>
    );
}

export default HomePage;