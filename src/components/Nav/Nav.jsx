import React, {  useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    MenuItem,
    Menu,
    Link,
    Avatar,
} from "@material-ui/core";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../store/actions/userActions";
import {
    Person,
    ExitToApp,
    AccountCircle,
    MenuRounded,
} from "@material-ui/icons";
import { Button, ButtonGroup, Typography } from "@material-ui/core";
import logo from "../../images/Boon-big.svg";
import { clearAuthHeader } from "../../helpers/apiCalls";
import { useHistory } from "react-router-dom";

export default function PrimarySearchAppBar() {
    const history = useHistory();

    const classes = useStyles();

    // REDUX
    const user = useSelector((state) => state.userReducer.user);

    // MATERIAL UI
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleLogout = () => {
        clearAuthHeader();
        dispatch(logoutAction());
    };

    const menuId = "primary-search-account-menu";

    const mobileMenuId = "primary-account-menu-mobile";

    return (
        <>
            <div className={classes.grow}>
                <AppBar className={classes.appBar} position='static'>
                    <Toolbar>
                        <Link underline='none' href='/' color='primary'>
                            <img
                                src={logo}
                                alt='Boon-logo'
                                className={classes.logo}
                            />
                        </Link>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            {user ? (
                                <>
                                    <Link
                                        underline='none'
                                        href='/MyBoons'
                                        className={classes.link}
                                        color='inherit'>
                                        <Typography variant='h6' color='primary'>
                                            {" "}
                                            My Boons
                                        </Typography>
                                    </Link>
                                    <Link
                                        underline='none'
                                        href='/Dashboard'
                                        className={classes.link}
                                        color='inherit'>
                                        <Typography variant='h6' color='primary'>
                                            {" "}
                                            Explore
                                        </Typography>
                                    </Link>
                                    <Link
                                        underline='none'
                                        href='/AboutUs'
                                        className={classes.link}
                                        color='inherit'>
                                        <Typography variant='h6' color='primary'>
                                            {" "}
                                            About Us
                                        </Typography>
                                    </Link>
                                    <Link
                                        underline='none'
                                        href='/Contact'
                                        className={classes.link}
                                        color='inherit'>
                                        <Typography variant='h6' color='primary'>
                                            {" "}
                                            Contact
                                        </Typography>
                                    </Link>
                                </>
                            ) : null}
                            <IconButton
                                edge='end'
                                aria-label='account of current user'
                                aria-controls={menuId}
                                aria-haspopup='true'
                                onClick={handleProfileMenuOpen}
                                color='inherit'>
                                {user ? (
                                    <Avatar
                                        alt='Remy Sharp'
                                        src={user.avatar}
                                        className={classes.avatarBooners}
                                    />
                                ) : (
                                    <AccountCircle />
                                )}
                            </IconButton>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton
                                aria-label='show more'
                                aria-controls={mobileMenuId}
                                aria-haspopup='true'
                                onClick={handleMobileMenuOpen}
                                color='inherit'>
                                <MenuRounded fontSize='large' />
                            </IconButton>
                        </div>

                        <Menu
                            anchorEl={mobileMoreAnchorEl}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            id={mobileMenuId}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={isMobileMenuOpen}
                            onClose={handleMobileMenuClose}>
                            {user ? (
                                <>
                                    <MenuItem>
                                        <Link
                                            underline='none'
                                            href='/AboutUs'
                                            color='primary'>
                                            <Typography
                                                variant='h6'
                                                color='primary'>
                                                {" "}
                                                About
                                            </Typography>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link
                                            underline='none'
                                            href='/MyBoons'
                                            color='primary'>
                                            <Typography
                                                variant='h6'
                                                color='primary'>
                                                {" "}
                                                My Boons
                                            </Typography>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link
                                            underline='none'
                                            href='/Dashboard'
                                            color='primary'>
                                            <Typography
                                                variant='h6'
                                                color='primary'>
                                                {" "}
                                                Explore
                                            </Typography>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link
                                            underline='none'
                                            href='/Contact'
                                            color='primary'>
                                            <Typography
                                                variant='h6'
                                                color='primary'>
                                                {" "}
                                                Contact
                                            </Typography>
                                        </Link>
                                    </MenuItem>

                                    <MenuItem>
                                        <Link underline='none' href='/EditUser'>
                                            <Typography
                                                variant='h6'
                                                color='primary'>
                                                {" "}
                                                Profile
                                            </Typography>
                                        </Link>
                                    </MenuItem>
                                </>
                            ) : (
                                <MenuItem onClick={handleProfileMenuOpen}>
                                    <IconButton
                                        aria-label='account of current user'
                                        aria-controls='primary-search-account-menu'
                                        aria-haspopup='true'
                                        color='inherit'>
                                        <AccountCircle />
                                    </IconButton>
                                    <Link underline='none' href='/EditUser'>
                                        <Typography variant='h6' color='primary'>
                                            {" "}
                                            Profile
                                        </Typography>
                                    </Link>
                                </MenuItem>
                            )}
                        </Menu>

                        <Menu
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            id={menuId}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={isMenuOpen}
                            onClose={handleMenuClose}>
                            {user ? (
                                <>
                                    <MenuItem onClick={handleMenuClose}>
                                        <Link
                                            underline='none'
                                            href='/EditUser'
                                            color='primary'>
                                            <Typography
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    flexWrap: "wrap",
                                                }}
                                                variant='h6'
                                                color='primary'>
                                                {" "}
                                                Profile
                                                <Person fontSize='large' />
                                            </Typography>
                                        </Link>{" "}
                                    </MenuItem>
                                    <MenuItem onClick={handleMenuClose}>
                                        <Link
                                            onClick={handleLogout}
                                            underline='none'
                                            color='primary'>
                                            <Typography
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                }}
                                                variant='h6'
                                                color='primary'>
                                                {" "}
                                                Logout
                                                <ExitToApp
                                                    fontSize='large'
                                                    onClick={() =>
                                                        history.go("/")
                                                    }
                                                />
                                            </Typography>
                                        </Link>
                                    </MenuItem>
                                </>
                            ) : (
                                <ButtonGroup
                                    variant='text'
                                    color='primary'
                                    aria-label='text primary button group'>
                                    <Button href='/Login'>Login</Button>
                                    <Button href='/Signup'>Signup</Button>
                                </ButtonGroup>
                            )}
                        </Menu>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    );
}
