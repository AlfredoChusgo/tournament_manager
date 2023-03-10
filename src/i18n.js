import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next"
    }
  },
  es: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",
      "grupo":"Grupo",
      "clasificacion":"Clasificación",
      "clasificacionIndividual":"Competencia individual",
      "agregarEtapa":"Agregar etapa",
      "agregarEtapaDescripcion":"Agrega una etapa extra si quieres clasificar equipos en base al rendinmiento de la(s) etapa(s) anterior(es).",
      "agregarGrupo":"Agregar Grupo",
      "cantidadEquipoGrupo":"Cantidad de equipos por grupo",
      "agregar":"Agregar",
      "cancelar":"Cancelar",
      "lugarVacio":"lugar vacio"
    },
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "es", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;