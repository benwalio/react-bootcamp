import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavbarStyles";
import { ThemeContext } from "./context/ThemeContext";
import { withLanguageContext } from "./context/LanguageContext";

const langPack = {
    english: {
        appTitle: 'app title',
        search: 'search',
        flag: '🇺🇸'
    },
    spanish: {
        appTitle: 'título de la aplicación',
        search: 'busca en',
        flag: '🇲🇽'
    },
    klingon: {
        appTitle: 'ghun pong',
        search: 'tu\'',
        flag: '🇹🇹'
    }
}

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const { classes } = this.props;
    const { isDarkMode, toggleTheme } = this.context;
    const { lang } = this.props.lang;
    const { appTitle, search, flag } = langPack[lang];

    return (
      <div className={classes.root}>
        <AppBar position="static" color={isDarkMode ? "default" : "primary"}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit">
              <span role="img" aria-label="canadian flag">
                {flag}
              </span>
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit">
              {appTitle} - {lang}
            </Typography>
            <Switch className={classes.switch} onChange={toggleTheme} />
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.SearchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder={`${search}...`}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withLanguageContext(withStyles(styles)(Navbar));
