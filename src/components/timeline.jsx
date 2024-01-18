import React from "react";
import link from 'fs';
import { Timeline, Space, Text, createStyles, Container, List } from "@mantine/core";
import TimeLineData from "../data/timeline.json";

const useStyles = ((theme) => ({
    
}))


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
    })





}