
import { en, es, ar } from '../language/idiomas.js'

export async function before(m,{ conn }) {

        let lang = global.db.data.users[m.sender].language

  let translations
   if (lang === "es") {
      translations = es
     } else if (lang === "en") {
      translations = en
      } else if (lang === "ar") {
      translations = ar
     } else {
      translations = es
     }

        global.msg = translations

}