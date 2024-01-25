import React from "react";
import PageHeader from "../components/header";
import ProfileCard from "../components/profileCard";
// import NewProfileCard from "../components/newpc";
// import Test from "../components/test";
// import PageBody from "../components/body";
// import { Space, Container } from "@mantine/core";
// import { SocialProfileJsonLd } from "next-seo";
// import { useRouter } from "next/router";
// import Progress from "../components/timeline";
import Footer from "../components/footer";

function HomePage() {
    return (
        <>
            <PageHeader/>
            <ProfileCard/>
            <Footer/>
        </>
    );
}

export default HomePage;


        // <Container>
        // <>
        //     <SocialProfileJsonLd
        //         type="Person"
        //         name="Menath Lakvindu"
        //         url="https://menath.dev"
        //         sameAs={[
        //             "https://www.linkedin.com/in/itsmenathbadde/",
        //             "https://github.com/MB-44"
        //         ]}/>

        //         <PageHeader/>
        //         <Space h={100} />
        // </>
        
        // </Container>