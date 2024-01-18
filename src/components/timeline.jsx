import React from "react";
import link from 'fs';
import { Timeline, Space, Text, createStyles, Container, List } from "@mantine/core";
import TimeLineData from "../data/timeline.json";
import { group } from "console";

const useStyles = createStyles((theme) => ({
    inner: {
        paddingBottom: theme.spacing.xl * 3,
    },

    content: {
        maxWidth: 800,
        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
            marginRight: 0,
        },
    },

    bold: {
        fontWeight: 700,
        color: theme.colorScheme === 'dark' ? theme.colors.red[6] : theme.colors.red[7],
    },

    title: {
        fontFamily: `Greycliff CF`,
        color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.dark,
        fontSize: 16,
        lineHeight: 1.2,
        fontWeight: 800,
    },
}));

// /**
//  * @param {object} props - The component props
//  * @param {TimeLineData} props.data - the timeline data
//  */

export function Progress({data}) {
    const { classes } = useStyles();
    data = TimeLineData.data;
    const groups = data.map((timelineinfo) => {
        const list = timelineinfo.item.map((info, index) => {
            <List.Item key={index}>
                {info.info}
            </List.Item>
        });
    
        return(
            <Timeline.Item key={timelineinfo.year}>
                <Text className={classes.title}>{timelineinfo.year}</Text>
                <Space h="xs"/>
                <List size="sm">
                    {list}
                </List>
                <Space h="xs"/>
            </Timeline.Item>
        );
    });

    return(
        <Container>
            <div className={classes.inner}>
                <div className={classes.content}>
                    <Timeline active={4} reverseActive lineWidth={5} bulletSize={22}>
                        {group}
                    </Timeline>
                </div>
            </div>
        </Container>
    );
}

export default Progress;