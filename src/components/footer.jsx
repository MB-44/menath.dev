import React from "react";
import { createStyles, Container, Group, Text } from "@mantine/core";
import FooterData from '../data/footer.json';
import { groupCollapsed } from "console";
import { PropTypes } from "prop-types";
// import { Interface } from "readline";

const useStyles = createStyles((theme) => ({
    footer: {
        paddingTop: theme.spacing.xl * 2,
        paddingBottom: theme.spacing.xl * 2,
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
    }



}))


export function Footer({data}) {
    const { classes } = useStyles();
    data  = FooterData.data;

    // const groups = data.map((group) => {
    //     const links = group.links.map((link, index) =>(
    //         <Text <'a'> key={index} className={classes.link} component="a" href={link.link}     >
    //             {link.label}
    //         </Text>
    //     ));
        
        return (
            <div className={classes.wrapper} key={group.title}>
              <Text className={classes.title}>{group.title}</Text>
                {links}
            </div>
          );
    // });
}   




export default Footer;