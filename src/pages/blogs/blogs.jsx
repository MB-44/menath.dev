import { createStyles, Card, Container, Text, Group, Space } from "@mantine/core";
import Link from "next/link";
import fs from 'fs';
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Head from "next/head";

const useStyles = createStyles((theme) => ({

}))


export function Blogs({ posts }) {
    const { classes } = useStyles();

    return (
        <div>
            <Head>
                <title>Blogs</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <Container className={classes.Space} size={900}>
                
            </Container>
        </div>
    );
}