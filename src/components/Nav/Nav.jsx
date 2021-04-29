import React, { useState } from "react";
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

export default function PrimarySearchAppBar() {
  const [isAuth, setIsAuth] = useState();
  const classes = useStyles();
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

  const menuId = "primary-search-account-menu";
  const renderMenu = (
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
  );

  const mobileMenuId = "primary-account-menu-mobile";
  const renderMobileMenu = (
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
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'>
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

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
          {/* <Typography
            className={classes.title}
            color='primary'
            variant='h3'
            noWrap>
            Boon
          </Typography> */}

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
