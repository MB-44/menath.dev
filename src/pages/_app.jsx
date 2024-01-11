import React from "react";
import { ColorSchemeProvider } from "@mantine/core";
import App from "../App";

function MyApp( ) {
    return(
        <ColorSchemeProvider>
            <App/>
        </ColorSchemeProvider>
    );
}

export default MyApp;