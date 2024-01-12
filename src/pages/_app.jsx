import { ColorSchemeProvider } from "@mantine/core";


function MyApp({ Component, pageProps}) {
    return (
        <ColorSchemeProvider>
            <Component {...pageProps}/>
        </ColorSchemeProvider>
    );
}

export default MyApp;