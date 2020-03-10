import React, {useState} from 'react';
import {IntlProvider} from 'react-intl';
import English from '../../assets/en_US.json';
import Russian from '../../assets/ru_RU.json';
import Poland from '../../assets/pl_PL.json';

export const Context = React.createContext();

const local = navigator.language;

let lang;

if (local === 'ru-RU') {
  lang = Russian;
} if (local === 'pl-Pl') {
  lang = Poland;
} if (local === 'en-US') {
  lang = English;
}

const Wrapper = (props) => {
  const [locale, setLocale] = useState(navigator.language);
  const [messages, setMessages] = useState(lang);

  function selectLang(e) {
    const newLocale = e.target.value;

    setLocale(newLocale);
    if (newLocale === 'ru-RU') {
      setMessages(Russian);
    } if (newLocale === 'pl-PL') {
      setMessages(Poland);
    } if (newLocale === 'en-US') {
      setMessages(English);
    }
  }

  return (
    <Context.Provider value={{locale, selectLang}}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default Wrapper;
