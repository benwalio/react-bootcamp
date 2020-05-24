import React, { Component } from "react";
import Navbar from "./Navbar";
import PageContent from "./PageContent";
import LoginForm from "./LoginForm";
import { ThemeProvider } from "./context/ThemeContext";

export default class LoginApp extends Component {
  render() {
    return (
      <ThemeProvider>
        <PageContent>
          <Navbar />
          <LoginForm />
        </PageContent>
      </ThemeProvider>
    );
  }
}
