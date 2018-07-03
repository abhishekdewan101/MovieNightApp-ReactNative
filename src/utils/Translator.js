import ReactNative from 'react-native';
import I18N from 'react-native-i18n';
import ReactNativeLanguages from 'react-native-languages';

import en from '../../locales/en.json';
import es from '../../locales/es_US.json';

I18N.fallbacks = true;

I18N.translations = {
    en,
    es,
};

I18N.locale  = ReactNativeLanguages.language;

ReactNativeLanguages.addEventListener('change', ({ language }) => {
    console.log("Language changed to " + language);
    I18N.locale = language;
});

export function translateString(name, params={}) {
    console.log(I18N.locale);
    return I18N.t(name,params);
}

export default I18N;
