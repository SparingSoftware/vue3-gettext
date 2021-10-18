import { Language } from "../src/typeDefs";

declare module "vue/types/vue" {
  interface Vue {
    $language: Language;
    $gettext: Language["$gettext"];
    $pgettext: Language["$pgettext"];
    $ngettext: Language["$ngettext"];
    $npgettext: Language["$npgettext"];
    $gettextInterpolate: Language["interpolate"];
  }
}
