import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Link from "@material-ui/core/Link";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../store/actions/userActions";
import { Button, ButtonGroup } from "@material-ui/core";

export default function PrimarySearchAppBar() {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  // const error = useSelector((state) => state.user.error);

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

  const mobileMenuId = "primary-account-menu-mobile";

  return (
    <>
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
              {user ? (
                <>
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
                </>
              ) : null}
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
                <MenuRoundedIcon />
              </IconButton>
            </div>

            <Menu
              anchorEl={mobileMoreAnchorEl}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              id={mobileMenuId}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={isMobileMenuOpen}
              onClose={handleMobileMenuClose}>
              {user ? (
                <>
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

                  <MenuItem>
                    <Link underline='none' href='/EditUser'>
                      Profile
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
                    Profile
                  </Link>
                </MenuItem>
              )}
            </Menu>

            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              id={menuId}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={isMenuOpen}
              onClose={handleMenuClose}>
              {user ? (
                <>
                  <MenuItem onClick={handleMenuClose}>
                    <Link underline='none' href='/EditUser' color='primary'>
                      Profile
                    </Link>{" "}
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <Link
                      onClick={() => dispatch(logoutAction())}
                      underline='none'
                      color='primary'>
                      Logout
                    </Link>
                  </MenuItem>
                </>
              ) : (
                <>
                  <ButtonGroup
                    variant='text'
                    color='primary'
                    aria-label='text primary button group'>
                    <Button href='/Login'>Login</Button>
                    <Button href='/Signup'>Signup</Button>
                  </ButtonGroup>
                </>
              )}
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}
