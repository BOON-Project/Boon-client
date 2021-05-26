import { Box, Link, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./styles";

const BoonNavBar = () => {
    const classes = useStyles();

    const [value, setValue] = useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box className={classes.box}>
                <Tabs
                    value={value}
                    indicatorColor='primary'
                    textColor='primary'
                    onChange={handleChange}
                    aria-label='disabled tabs example'>
                    <Tab label='Offered Boons' />

                    <Tab label='Incoming Boons' />
                </Tabs>

                {/* <Link underline='none' className={classes.link} href='#'>
                    Offered Boons
                </Link>
                <Link underline='none' className={classes.link} href='#'>
                    Receiving Boons
                </Link> */}
            </Box>
        </>
    );
};

export default BoonNavBar;
