import React, {useState} from 'react';
import { 
    Header, 
    Container, 
    Burger,    
    Group,
    createStyles,
    Paper, Text,
    Transition 
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/router';
import Link from "next/link";
// need to import color scheme toggle
import "./header-style.css";



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


                </Group>
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