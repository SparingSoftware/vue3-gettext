import { createGettext } from "../../src";

import translations from "../../dev/language/translations.json";

import LanguageSelect from "./components/LanguageSelect.vue";
import Demo from "../../dev/App.vue";

const gettext = createGettext({
  availableLanguages: {
    en_GB: "British English",
    fr_FR: "Français",
    it_IT: "Italiano",
  },
  defaultLanguage: "en_GB",
  translations: translations,
});

export default ({ app }) => {
  app.use(gettext);

  app.component("LanguageSwitch", LanguageSelect);
  app.component("Demo", Demo);
};
