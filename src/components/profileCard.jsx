import { createStyles, Text, Button, Group, Grid, Space } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import { IconSpacingVertical } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
    image: {
        maxWidth: '220px',
        maxHeight: '220px',
        display: 'flex',
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
    display: {
        display: 'block',
        '@media (max-width: 768px)': {
            display: 'none'
        }
    }
}))


function ProfileCard() {
  const { classes } = useStyles();
  return (
    <div> 
        <div className={classes.desktop}>
            <Grid justify="space-between">
                <Grid.Col sm={7} lg={8}>
                    <Text className={classes.title}>Hi, I'm Menath. <br />I'm a developer</Text>
                    <Text className={classes.p}>Tech enthusiast</Text>
                    <Text className={classes.p2} mt={20}>Founder of Enter-44.io</Text>
                    <Text className={classes.p2}>trying to expand tech industry in Sri Lanka</Text>

                    <Space h="sm"/>
                    
                </Grid.Col>
            </Grid> 
                {/* image, title, para, need to add */}
        </div>
    </div>
    );
}

export default ProfileCard;