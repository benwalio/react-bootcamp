import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles/FormStyles";
import { LanguageContext } from './context/LanguageContext'

const langPack = {
    english: {
        email: 'email',
        signIn: 'sign in',
        password: 'password',
        langEng: 'english',
        langSpa: 'spanish',
        langKli: 'klingon',
        remember: 'remember me'
    },
    spanish: {
        email: 'correo electrónico',
        signIn: 'firme en el registro',
        password: 'contraseña',
        langEng: 'inglés',
        langSpa: 'español',
        langKli: 'klingon',
        remember: 'recuerdenme'
    },
    klingon: {
        email: 'email SoQ',
        signIn: 'qI\'',
        password: 'mu\'wIj',
        langEng: 'tera\'',
        langSpa: 'spanish Hol',
        langKli: 'tlhIngan',
        remember: 'qaw jih'
    }
}

class LoginForm extends Component {
    static contextType = LanguageContext;
  render() {
    const { classes } = this.props;
    const { lang, changeLang } = this.context;

    const { email, signIn, password, langEng, langSpa, langKli, remember } = langPack[lang];

    return (
      <div className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">{signIn}</Typography>
          <Select value={lang} onChange={changeLang}>
            <MenuItem value='english'>{langEng}</MenuItem>
            <MenuItem value='spanish'>{langSpa}</MenuItem>
            <MenuItem value='klingon'>{langKli}</MenuItem>
          </Select>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">{email}</InputLabel>
              <Input id="email" name="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">{password}</InputLabel>
              <Input id="password" name="password" autoFocus />
            </FormControl>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={remember}
            />
          </form>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            className={classes.submit}
            fullWidth
          >
            {signIn}
          </Button>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(LoginForm);
