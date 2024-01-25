import React from "react";
import { createStyles, Button, Text, Container, Group } from "@mantine/core";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
    root: {
        paddingBottom: 150,
        paddingTop: 100,
    },

    label: {
        textAlign: "center",
        fontWeight: 900,
        fontSize: 220,
        lineHeight: 1,
        marginBottom: theme.spacing.xl * 1.5,
        color: theme.colorScheme === 'dark' ? theme.colors.light : theme.colors.dark,
        
        [theme.fn.smallerThan('sm')]: {
            fontSize: 120,
        },
    },

    title: {
        textAlign: 'center',
        fontWeight: 900,
        fontSize: 38,
    
        [theme.fn.smallerThan('sm')]: {
            fontSize: 32,
        },
    },

    description: {
        maxWidth: 500,
        margin: 'auto',
        marginTop: theme.spacing.xl,
        marginBottom: theme.spacing.xl * 1.5,
    },
}));

export function NotFoundError() {
    const { classes } = useStyles();

    return(
        <Container className={classes.root}>
            <div className={classes.label}>404</div>
            <Text className={classes.title}>heyyyyy, its 404, you know what it is</Text>
            <Text color="dimmed" size="lg" align="center" className={classes.description}>
                {/* thinking about the description to add */}
            </Text>
            <Group position="center">
                <Link href="/">
                    <Button size="md">
                        Back to Home
                    </Button>
                </Link>
            </Group>
        </Container>
    );
}

export default function NotFound() {
    return <NotFoundError />;
}