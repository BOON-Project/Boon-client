import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import SubdirectoryArrowRightIcon from "@material-ui/icons/SubdirectoryArrowRight";
import SubdirectoryArrowLeftIcon from "@material-ui/icons/SubdirectoryArrowLeft";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles";

function ResponsiveDrawer(props, theme) {
    const { window } = props;
    const classes = useStyles();

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                <ListItem>
                    <ListItemIcon>
                        <SubdirectoryArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText>Requested Boons</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <SubdirectoryArrowLeftIcon />
                    </ListItemIcon>
                    <ListItemText>Offered Boons</ListItemText>
                </ListItem>
            </List>
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position='fixed' className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        edge='start'
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' noWrap>
                        My Boons
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label='mailbox folders'>
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation='css'>
                    <Drawer
                        container={container}
                        variant='temporary'
                        anchor={theme.direction === "rtl" ? "right" : "left"}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}>
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation='css'>
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant='permanent'
                        open>
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
            </main>
        </div>
    );
}

export default ResponsiveDrawer;
