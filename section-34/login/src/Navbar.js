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
import { LanguageContext } from "./context/LanguageContext";

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const { classes } = this.props;
    const { isDarkMode, toggleTheme } = this.context;
    return (
      <LanguageContext.Consumer>
        {(value) => (
          <div className={classes.root}>
            <AppBar
              position="static"
              color={isDarkMode ? "default" : "primary"}
            >
              <Toolbar>
                <IconButton className={classes.menuButton} color="inherit">
                  <span role="img" aria-label="canadian flag">
                    🇨🇦
                  </span>
                </IconButton>
                <Typography
                  className={classes.title}
                  variant="h6"
                  color="inherit"
                >
                  App title - {value.lang}
                </Typography>
                <Switch onChange={toggleTheme} />
                <div className={classes.grow} />
                <div className={classes.search}>
                  <div className={classes.SearchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="search..."
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                  />
                </div>
              </Toolbar>
            </AppBar>
          </div>
        )}
      </LanguageContext.Consumer>
    );
  }
}

export default withStyles(styles)(Navbar);
