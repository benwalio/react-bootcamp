import React, { Component } from "react";
import Navbar from "./Navbar";
import PageContent from "./PageContent";
import LoginForm from "./LoginForm";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

export default class LoginApp extends Component {
  render() {
    return (
      <ThemeProvider>
        <LanguageProvider>
          <PageContent>
            <Navbar />
            <LoginForm />
          </PageContent>
        </LanguageProvider>
      </ThemeProvider>
    );
  }
}
