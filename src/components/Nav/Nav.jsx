import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Link from "@material-ui/core/Link";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import useStyles from "./styles";
import { useSelector } from "react-redux";

export default function PrimarySearchAppBar() {
  const user = useSelector((state) => state.authReducer.user);
  const [isAuth, setIsAuth] = useState(false);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  useEffect(() => {
    if (Object.keys(user).length) setIsAuth(true);
  }, [user]);
  const handleProfileMenuOpen = (event) => {
    event.preventDefault();
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
    event.preventDefault();
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = !isAuth ? (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleMenuClose}>
        <Link underline='none' href='/Login' color='primary'>
          Login
        </Link>{" "}
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link underline='none' href='/Signup' color='primary'>
          Signup
        </Link>{" "}
      </MenuItem>
    </Menu>
  ) : (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleMenuClose}>
        <Link underline='none' href='/UserProfile' color='primary'>
          Profile
        </Link>{" "}
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link underline='none' href='/Logout' color='primary'>
          Logout
        </Link>{" "}
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-account-menu-mobile";
  const renderMobileMenu = !isAuth ? (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'>
          <AccountCircle />
        </IconButton>
        <Link underline='none' href='/UserProfile'>
          Profile
        </Link>
      </MenuItem>
    </Menu>
  ) : (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem>
        <Link underline='none' href='#' color='primary'>
          Request a Boon
        </Link>
      </MenuItem>
      <MenuItem>
        <Link underline='none' href='#' color='primary'>
          My Boons
        </Link>
      </MenuItem>
      <MenuItem>
        <Link underline='none' href='#' color='primary'>
          Explore
        </Link>
      </MenuItem>
      <IconButton
        aria-label='account of current user'
        aria-controls='primary-search-account-menu'
        aria-haspopup='true'
        color='inherit'>
        <AccountCircle />
      </IconButton>
      <Link underline='none' href='/UserProfile'>
        Profile
      </Link>
    </Menu>
  );
  if (!isAuth) {
    return (
      <div className={classes.grow}>
        <AppBar className={classes.appBar} position='static'>
          <Toolbar>
            <Link underline='none' href='/' color='primary'>
              <img
                src='./images/Boon-big.svg'
                alt='Boon-logo'
                className={classes.logo}
              />
            </Link>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                edge='end'
                aria-label='account of current user'
                aria-controls={menuId}
                aria-haspopup='true'
                onClick={handleProfileMenuOpen}
                color='inherit'>
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label='show more'
                aria-controls={mobileMenuId}
                aria-haspopup='true'
                onClick={handleMobileMenuOpen}
                color='inherit'>
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
    );
  } else {
    return (
      <div className={classes.grow}>
        <AppBar className={classes.appBar} position='static'>
          <Toolbar>
            <Link underline='none' href='/' color='primary'>
              <img
                src='./images/Boon-big.svg'
                alt='Boon-logo'
                className={classes.logo}
              />
            </Link>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Link
                underline='none'
                href='#'
                className={classes.link}
                color='inherit'>
                Request a Boon
              </Link>
              <Link
                underline='none'
                href='#'
                className={classes.link}
                color='inherit'>
                My Boons
              </Link>
              <Link
                underline='none'
                href='#'
                className={classes.link}
                color='inherit'>
                Explore
              </Link>
              <IconButton
                edge='end'
                aria-label='account of current user'
                aria-controls={menuId}
                aria-haspopup='true'
                onClick={handleProfileMenuOpen}
                color='inherit'>
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label='show more'
                aria-controls={mobileMenuId}
                aria-haspopup='true'
                onClick={handleMobileMenuOpen}
                color='inherit'>
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
    );
  }
}
