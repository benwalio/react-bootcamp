import React, { createContext } from "react";

export const LanguageContext = createContext();

export class LanguageProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'klingon',
    };
    this.changeLang = this.changeLang.bind(this)
  }

  changeLang(e) {
      this.setState({
          lang: e.target.value
      })
  }

  render() {
    return (
      <LanguageContext.Provider value={{ ...this.state, changeLang: this.changeLang }}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
