import { createStyles, Container, Title, Text, Highlight } from "@mantine/core";
import Head from "next/head";
// import progres
// import social 


const useStyles = createStyles((theme) => ({

}))


function about() {
    const { classes } = useStyles();
    return(
        <div>
            <Head>
                <title>About</title>
                <meta name="viewport" content="initial-scale=1.0 width=device-width"/>
            </Head>
            
            <Container>
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Text className={classes.title}>
                            About
                        </Text>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default about;