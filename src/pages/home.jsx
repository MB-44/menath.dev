import React from "react";
import PageHeader from "../components/header";
import PageBody from "../components/body";
import { Space, Container } from "@mantine/core";
import { SocialProfileJsonLd } from "next-seo";

export default function HomePage() {
    return (
        <Container>
        <>
            <SocialProfileJsonLd
                type="Person"
                name="Menath Lakvindu"
                url="https://menath.dev"
                sameAs={[
                    "https://www.linkedin.com/in/itsmenathbadde/",
                    "https://github.com/MB-44"
                ]}/>

                <PageHeader/>
                <Space h={100} />


        </>
        
        </Container>
    );
}
