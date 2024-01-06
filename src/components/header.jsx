import React from 'react';
import { 
    Header, 
    Container, 
    Burger,    
    Group,
    createStyles,
    Paper, Text,
    xl, sm,
    Transition 
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/router';
import Link from "next/link";
// need to import color scheme toggle
// import "./header-style.css";
import { ToggleButton, collapseClasses } from '@mui/material';

const useStyles = createStyles((theme) => ({
    body: {
        position: 'relative',
        zIndex: 1,
        marginBottom: theme.spacing[xl] * 4,
        borderBottom: `0px solid`,

        '@media (max-width: 768px)': {
            marginBottom: theme.spacing[xl] * 2,
        },

        '@media (max-width: 500px)': {
            marginBottom: theme.spacing[xl] * 0
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

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    hide: {
        '@media (max-width: 309px)': {
            display: 'none',
        },
    },

    link: {
        fontFamily: 'Greycliff CF',
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[9],
        fontSize: 15,
        fontWeight: 700,
        
        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
        },

        [theme.fn.smallerThan('sm')]: {
            fontWeight: 400,
            borderRadius: 0,
            padding: theme.spacing.md,
        },
    },

    title: {
        fontWeight: 700,
        fontSize: 26,
        fontFamily: 'Graycliff CF',
        color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.gray[9],
    },

    linkActive: {
        '&, &:hover': {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
        },
    },
}))

function PageHeader() {
    const [ opened, { toggle, close }] = useDisclosure(false);
    const { classes, cx } = useStyles();
    const router = useRouter();

    return(
        <Header height={70} className={classes.body}>
            <Container className={classes.header}>
                <Group spacing={xl}>
                    <Text className={classes.title}>
                        menath.dev
                    </Text>
                    <div className={classes.burger}>
                        <div className={classes.hide}>
                            {/* color scheme toggle */}
                        </div>
                    </div>
                </Group>

                <Group spacing={5} className={classes.links}>
                    <Link href="/">
                        <a 
                            key={Home}
                            className = {cx(classes.links, router.pathname == "/" ? classes.linkActive: '')}
                            onClick = {(e) => {
                                close();
                            }}>
                                Home
                            </a>
                    </Link>

                    <Link href="/about">
                        <a 
                            key={About}
                            className={cx(classes.link, router.pathname == "/about" ? classes.linkActive: '')}
                            onClick={(e) => {
                                close();
                            }}>
                                About 
                            </a>
                    </Link>
                    
                    <Link href="/projects">
                        <a
                            key={Projects}
                            className={cx(classes.link, router.pathname == "/projects" ? classes.linkActive: '')}
                            onClick={(e) => {
                                close();
                            }}>
                                Projects
                            </a>
                    </Link>
                    
                    <Link href="/blogs">
                        <a 
                            key={Blogs}
                            className={cx(classes.link, router.pathname == "/blogs" ? classes.linkActive: '')}
                            onClick={(e) => {
                                close();
                            }}>
                                Blogs 
                            </a>
                    </Link>
                {/* need to add colorscheme toggle */}
                </Group>
                
                <Burger 
                    opened={opened} 
                    onClick={toggle} 
                    className={classes.burger}
                    size={sm}
                    aria-label={ToggleButton}
                    />

                <Transition transition={'pop-top-right'} duration={200} mounted={opened}>
                            {(styles) => (
                                <Paper className={classes.dropdown} withBorder style={styles}>
                                    <Link href="/">
                                        <a 
                                            key={Home}
                                            className={cx(classes.link, router.pathname == "/" ? classes.linkActive: '')}
                                            onClick={(e) => {
                                                close();
                                            }}>
                                                Home 
                                            </a>
                                    </Link>

                                    <Link href="/about">
                                        <a 
                                            key={About}
                                            className={cx(classes.link, router.pathname == "/about" ? classes.linkActive: '')}
                                            onClick={(e) => {
                                                close();
                                            }}>
                                                About 
                                            </a>
                                    </Link>

                                    <Link href="/projects">
                                        <a 
                                            key={Projects}
                                            className={cx(classes.link, router.pathname == "/projects" ? classes.linkActive: '')}
                                            onClick={(e) => {
                                                close();
                                            }}>
                                                Projects 
                                            </a>
                                    </Link>

                                    <Link href="/blogs">
                                        <a 
                                            key={Blogs}
                                            className={cx(classes.link, router.pathname == "/blogs" ? classes.linkActive: '')}
                                            onClick={(e) => {
                                                close();
                                            }}>
                                                Blogs
                                            </a>
                                    </Link>
                                </Paper>
                            )}
                </Transition>

            </Container>
        </Header>
    );
}

export default PageHeader;

// const [showMenu, setShowMenu] = useState(false)

    // const toggleMenu = () => {
    //     setShowMenu(!showMenu);
    // }

    // return (
    //     <header className='header-container'>
    //         <div className='header-content'>
    //             <nav className='header-nav'>
    //                 <h1 className='header-title'>menath.dev</h1>

    //             <button className='navbar-toggle' onClick={toggleMenu}>
    //                 &#9776;
    //             </button>


    //             {/* <div className='navbar-items'> */}
    //             <div className={`navbar-items ${showMenu ? 'show-menu': ''}`}>
    //                 <ul>
    //                     <li><button><a href="#">Home</a></button></li>
    //                     <li><button><a href="#">About</a></button></li>
    //                     <li><button><a href="#">Projects</a></button></li>
    //                     <li><button><a href="#">Blogs</a></button></li>
    //                 </ul>
    //             </div>

    //             </nav>
    //         </div>
    //     </header>

    // );