import { createStyles, Text, Button, Group, Grid, Space } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";

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
                <Grid></Grid> 
                {/* image, title, para, need to add */}
            </div>
        </div>
    );

}

export default ProfileCard;