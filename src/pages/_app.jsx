import { useState } from "react";
import next, { GetServerSidePropsContext } from 'next';
import { NotificationsProvider } from "@mantine/notifications";
import { getCookie, setCookie } from 'cookies-next';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { AppProps } from "next/app";
import { PageBody } from "../components/body";
import Head from "next/head";
import PageHeader from "../components/header";

export default function App(props) {
    const { Component, pageProps } = props;
    const [colorScheme, setColorScheme] = useState(props.colorScheme);

    const toggleColorScheme = (value) => {
        const nextColorScheme = value || (colorScheme === "dark" ? "light" : "dark");
        setColorScheme(nextColorScheme);

        setCookie('mantine-color-scheme', nextColorScheme, {maxAge: 60 * 60 * 24 * 30});

    }
}