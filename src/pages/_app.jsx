import { MantineProvider, ColorScheme, ColorSchemeProvider } from "@mantine/core";
import { useState } from "react";
import { GetServerSidePropsContext } from "next";
import { AppProps } from "next/app";
import { getCookie, setCookie } from "cookies-next";
import Head from "next/head";
import { NotificationsProvider } from "@mantine/notifications";
import PageHeader from "../components/header";

function MyApp({ Component, pageProps}) {
    return (
        <ColorSchemeProvider>
            <Component {...pageProps}/>
        </ColorSchemeProvider>
    );
}

export default MyApp;