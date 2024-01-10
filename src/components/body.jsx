import React from "react";
import Image from "next/dist/client/image";
import { Carousel } from "@mantine/carousel";
import { createStyles, Card, Text, Group } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  
  Carousel: {
    maxWidth: 385,
    minWidth: 385,
    width: 385,
  
    [`@media (max-width: 435px)`]: {
      minWidth: "100%",
      width: "100%",
      height: 200,
    }
  },

  title: {
    fontFamily: `Quicksand Bold, ${theme.fontFamily}`,
    fontWeight: 700,
    lineHeight: 1.2,
    fontSize: 25,
    color: theme.colorScheme == 'dark' ? theme.white : theme.black,
  },

  description: {
    fontSize: 17,
    lineHeight: 1.6
  },

  body: {
    padding: theme.spacing.md,
  },

  leftwrapper: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? "#1F2225" : "#f9f9f9",
    [`@media (max-width): ${theme.breakpoints.sm}px`]: {
      flexDirection: 'column',
    }
  },

  rightwrapper: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === "dark" ? "#1F2225" : "#f9f9f9",
    [`@media (max-width): ${theme.breakpoints.sm}px`]: {
      flexDirection: 'column-reverse',
    },
  },
}))



export function PageBody() {
    const {classes} = useStyles();

    return(
        <div id="highlights">
          <Text></Text>
        </div>
    );
}
