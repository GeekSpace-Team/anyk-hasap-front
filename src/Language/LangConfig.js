import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
            "homePage":"Home page",
            "OurServices":"Our services",
            "Aboutus":"About us",
            "Contacts":"Contacts",
            "wheretrustmeetsstrategy": "Where trust meets strategy",
            "learnMore":"Learn more",
            "homeInfoTitle":"Pain",
            "homeInfoText":"The pain itself is love, the main storage system. Invalid Input",
            "homeUnderTitle":"The pain itself is love, the main storage system. Sed placerat scelerisque magna. Sed placerat scelerisque magna. Sed placerat scelerisque magna.",
            "homeAboutUsText":"The pain itself is love, the main storage system. The fear at the bow, the laughter and sometimes the chocolate in the backyard. In my Olympics that's not the price of the mass to suspend the eu. The curse of the elite is easy, the poverty of each person is a comprehensive, venenous bed.",
            "contactUs": "Contact us",
            "underContactUs":"If you have any questions or need any assistance  ",
            "customerReviews": "Customer Reviews",
            "ourServicText":"The pain itself is love, the main storage system. The lake wants the arrows, until the main street is aligned with the venomous quiver. From the football, if not, the price is important.",
          }
      },
      tm: {
        translation: {
            "homePage":"Baş sahypa",
            "OurServices":"Hyzmatlarymyz",
            "Aboutus":"Biz barada",
            "Contacts":"Habarlaşmak",
            "wheretrustmeetsstrategy":"Bu ýerde ynam strategiýa laýyk gelýär",
            "learnMore":"Dowamyny oka",
            "homeInfoTitle":"Agyry",
            "homeInfoText":"Agyrynyň özi esasy saklaýyş ulgamy bolan söýgi. Nädogry giriş",
            "homeUnderTitle":"Agyrynyň özi esasy saklaýyş ulgamy bolan söýgi. Sed placerat scelerisque magna. Sed placerat scelerisque magna.",
            "homeAboutUsText":"Agyrynyň özi esasy saklaýyş ulgamy bolan söýgi. Ataýdaky gorky, gülki we käwagt howluda şokolad. Olimpiýa oýunlarymda eu-ny togtatmak köpçüligiň bahasy däl. Elitanyň näleti aňsat, her bir adamyň garyplygy hemme taraplaýyn, wena ýatagydyr.",
            "contactUs":"Habarlaşmak",
            "underContactUs":"Soraglaryňyz bar bolsa ýa-da kömek gerek bolsa",
            "customerReviews":"müşderi synlary",
            "ourServicText":"Agyrynyň özi esasy saklaýyş ulgamy bolan söýgi. Köl esasy köçäni zäherli titreýänçä, oklary isleýär. Futboldan, bolmasa, bahasy möhümdir.",

        }
      },
      ru: {
        translation: {
            "homePage":"Главная",
            "OurServices":"Наши сервисы",
            "Aboutus":"О нас",
            "Contacts":"Контакты",
            "wheretrustmeetsstrategy": "где доверие встречается со стратегией",
            "learnMore":"узнать больше",
            "homeInfoTitle":"БОЛЬ",
            "homeInfoText":"Сама боль и есть любовь, главная система хранения. Некорректный ввод",
            "homeUnderTitle":"Сама боль и есть любовь, главная система хранения. Sed россыпь блестящая великая Sed россыпь блестящая великая Sed россыпь блестящая великая.",
            "homeAboutUsText":"Сама боль и есть любовь, главная система хранения. Страх на носу, смех и иногда шоколад на заднем дворе. В моей олимпиаде это не цена массы, чтобы приостановить действие ЕС. Проклятие элиты легкое, нищета каждого человека всеобъемлющее, ядовитое ложе.",
            "contactUs":"связаться с нами",
            "underContactUs":"Если у вас есть какие-либо вопросы или вам нужна помощь",
            "customerReviews":"Отзывы клиентов",
            "ourServicText":"Сама боль и есть любовь, главная система хранения. Озеру нужны стрелы, пока главная улица не выровняется с ядовитым колчаном. От футбола, если нет, то цена важна.",
            
        }
      }
    },
    keySeparator: false,
    interpolation: { escapeValue: false }
  });

export {i18n};
