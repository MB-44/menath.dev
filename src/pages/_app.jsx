import React from "react";
import { ColorSchemeProvider } from "@mantine/core";
import App from "../App";

function MyApp({ Component, pageProps }) {
    return(
        <ColorSchemeProvider>
            <App {...pageProps}/>
        </ColorSchemeProvider>
    );
}

export default MyApp;