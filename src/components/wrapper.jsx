import React, {useState} from "react";
import { IntlProvider} from "react-intl";
import English from "../en-Us.json"
import Russian from "../ru-RU.json"

export const Context = React.createContext();

const local = navigator.language;

let lang;
    if (local === "ru-RU") {
        lang = Russian
    } else {
        lang = English
    }

const Wrapper = (props) => {
        const [locale, setLocale] = useState(local);
        const [content, setContent] = useState(lang);

        function selectLang(e) {
            const newLocale = e.target.value;
            setLocale(newLocale);
            if (newLocale === "ru-Ru") {
                setContent(Russian);
                console.log(locale)
            } else {
                setContent(English);
                console.log(locale)
            }
        }

    return(
        <Context.Provider value={{locale, selectLang }}>
            <IntlProvider messages={content} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider>
    )
};


    export default Wrapper;