import React from "react";
import { makeStyles } from "@material-ui/core";

import howitworksStyleSheet from './howitworksStyles.js';

const useStyles = makeStyles(howitworksStyleSheet);

function HowItWorks() {
    const classes = useStyles();
    
    return(
            <div className={classes.mission}>
                <h1>How it Works</h1>
                <p>Meet Serena, our assistant who will get to know you on a personal level</p>
                <p>We will search high and low for the right opportunities.</p>
                <p>You will then gain access to resources that are most relevant to you.</p>
            </div>
    );
}

export default HowItWorks;
