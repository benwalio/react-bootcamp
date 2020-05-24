import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider(props) {
    const [lang, setLang] = useState('klingon');

    const changeLang =(e) => setLang(e.target.value);

    return (
      <LanguageContext.Provider value={{ lang, changeLang }}>
        {props.children}
      </LanguageContext.Provider>
    );
}