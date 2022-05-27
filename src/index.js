import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import { IntlProvider } from 'react-intl';
import Homes from "./components/homes";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";


let lang;
const getLocale = () => {
  const userLang = navigator.language || navigator.userLanguage;
  console.log(userLang);
  lang = userLang;
  return userLang === "es" ? localeEsMessages : localeEnMessages;
}
getLocale();

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <IntlProvider locale={lang} messages={getLocale()}>
    <div class="row">
      <Homes />
    </div>
  </IntlProvider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
