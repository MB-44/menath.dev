import { createStyles, Text, Button, Group, Grid, Space } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import React from "react";
// import { IconSpacingVertical } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
    cardContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '40vh',
    },
    
    title: {
        color: theme.colorScheme === "dark" ? theme.colors.gray[0] : theme.colors.dark[9],
        lineHeight: 1,
        fontSize: 28,
        fontWeight: 800,
        fontFamily: '"Graycliff CF", sans-serif',
        marginBottom: theme.spacing.sm,
        paddingTop: theme.spacing.xl * 2,
        [theme.fn.smallerThan('sm')]: {
            paddingTop: theme.spacing.xl * 1,
        },

        '@media (max-width: 500px)': {
            fontSize: 33,
        },
    },

    p: {
        fontFamily: "'Greycliff CF', sans-serif",
        color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.gray[9],
        fontSize: 17,
        lineHeight: 1.2,
        letterSpacing: 0.9,
        fontWeight: 600,
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            fontSize: 16,
        },
    },
    
    p2: {
        letterSpacing: 0.9,
        fontSize: 16,
        lineHeight: 1.4,
        fontWeight: 500,
        fontFamily: '"Graycliff CF", sans-serif',
    },

    flex: {
        [theme.fn.smallerThan('xs')]: {
            flex: 1,
        },
    },

    image: {
        display: 'flex',
        maxWidth: '220px',
        maxHeight: '220px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: '20px',
        
        '@media (max-width: 768px)': {
            maxWidth: '200px',
        },
        
        '@media (max-width: 375px)': {
            maxWidth: '60%'
        }
    },

    mobile: {
        marginTop: 60,
        display: 'none',
        '@media (max-width: 768px)': {
            display: 'block'
        }
    },

    desktop: {
        display: 'block',
        '@media (max-width: 768px)': {
            display: 'none'
        }
    }
}))


function ProfileCard() {
  const { classes } = useStyles();

  return (
    <div className={classes.cardContainer}> 
        <div className={classes.desktop}>
            <Grid justify="space-between">
                <Grid.Col sm={7} lg={8}>
                    <Text className={classes.title}>Hi, I'm Menath. <br />I'm a developer</Text>
                    <Text className={classes.p}>Tech enthusiast</Text>
                    <Text className={classes.p2} mt={20}>Founder of Enter-44.io</Text>
                    <Text className={classes.p2}>trying to expand tech industry in Sri Lanka</Text>

                    <Space h="sm"/>

                    <Group>
                        <Link href="/about" passHref>
                            <Button variant="gradient" gradient={{from: 'indigo', to: 'cyan'}} className={classes.flex}>
                                About Me
                            </Button>
                        </Link>
                        <Link href="/projects">
                            <Button variant="default" className={classes.flex}>
                                Projects
                            </Button>
                        </Link>
                    </Group>

                </Grid.Col>

                <Grid.Col sm={5} lg={3}>
                    {/* <div className={classes.image}>
                        <Image src="https://res.cloudinary.com/duzaksn22/image/upload/v1705405151/menath.dev/profile-pic_gpys8l.jpg"
                            alt="menath"
                            width="250"
                            height="250"
                            priority={true}
                            style={{borderRadius: '50%'}}
                            // onLoad={handleImageLoad}
                            // loading="eager"
                        />
                    </div> */}
                </Grid.Col>
            </Grid> 
        </div>

        <div className={classes.mobile}>
            <Grid>
                <Grid.Col md={5} lg={3}>
                    {/* <div className={classes.image}>
                        <Image src="https://res.cloudinary.com/duzaksn22/image/upload/v1705405151/menath.dev/profile-pic_gpys8l.jpg"
                            alt="menath"
                            width="250"
                            height="250"
                            priority={true}
                            style={{ borderRadius: '50%'}}
                            // onLoad={handleImageLoad}
                            // loading="eager"
                        />
                    </div> */}
                </Grid.Col>

                <Grid.Col sm={7} lg={8}>
                    <Text className={classes.title}>Hi, I'm Menath. <br />I'm a developer</Text>
                    <Text className={classes.p}>Tech enthusiast</Text>
                    <Text className={classes.p2} mt={20}>Founder of Enter-44.io</Text>
                    <Text className={classes.p2}>trying to expand tech industry in Sri Lanka</Text>

                <Space h="sm"/>
                <Group>
                    <Link href="/about" passHref>
                        <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan'}}>About Me</Button>
                    </Link>
                    <Link href="/projects" passHref>
                        <Button variant="default" className={classes.flex}>
                            Projects
                        </Button>
                    </Link>
                </Group>
                </Grid.Col>
            </Grid>
        </div>
    </div>
    );
}

export default ProfileCard;