import React from "react";
import { useMantineColorScheme, createStyles, Group } from "@mantine/core";
import { Header, Container, Text } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
    body: {
        position:'relative',
        zIndex: 1,
        marginBottom: theme.spacing.xl * 4,
        borderBottom: `0px solid`,
        
        '@media (max-width: 768px)': {
            marginBottom: theme.spacing.xl * 2
        },

        '@media (max-width: 500px)': {
            marginBottom: theme.spacing.xl * 0,
        },
    },

    dropdown: {
        position: 'absolute',
        zIndex: 0,
        left: 0, right: 0,
        top: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: 'hidden',

        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
    },

    title: {
        fontFamily: `Greycliff CF`,
        fontSize: 26,
        fontWeight: 700,
        color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.gray[9],
    },
}))



function PageHeader() {
    
    const { classes } = useStyles();
    const router = useRouter();
    // const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  
    return (
      <Header height={70} className={classes.body}>
        <Container className={classes.header}>
            
                <Text className={classes.title}>menath.dev</Text>



        </Container>
      </Header>
    );
}

export default PageHeader;