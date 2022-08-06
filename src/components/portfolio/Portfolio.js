import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";
import Style from './Portfolio.module.scss';

export default function Portfolio() {
    return (
        <Box className = {Style.fadeIn}>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map(project => (
                   <Grid item xs={12} md={4}>
                       <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};