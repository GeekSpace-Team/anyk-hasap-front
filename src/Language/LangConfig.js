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
            "sendMessage":"Successfully sended",
            "address":"203 apartment, Oguzhan street, Ashgabat city",
            "aboutUsText1":'Since 2018, Anyk Hasap auditing company has been providing a wide range of services in the field of audit, accounting, taxation and management consulting.',
            "aboutUsText2":'Anyk Hasap auditors have more than 20 years of excellent work experience in the field of audit, accounting and tax consulting in organizations of various fields of activity, auditors in the staff are all reliable professionals.',
            "aboutUsText3":'When choosing an audit company, along with the cost of services, business reputation and experience play an important role. Therefore, we undertake only the work that we can do really well, with full responsibility and quality assurance!',
            "aboutUsText4":'The license to carry out audit activities was issued by the Ministry of Economy and Finance of Turkmenistan No. 1-17-29-50 dated December 28, 2021.',
            "aboutUsText5":'"Anyk Hasap" strives to bring real benefits to your business, protect you from mistakes, reduce tax and financial risks - provide high quality services.',
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
            "sendMessage":"üstünlikli iberildi",
            "aboutUsText1":'2018-nji ýyldan başlap, “Anyk Hasap” barlag kompaniýasy audit, buhgalteriýa, salgyt salmak we dolandyryş maslahat beriş ulgamynda giň hyzmatlary hödürleýär.',
            "aboutUsText2":'Anyk Hasap auditorlary, dürli iş guramalarynda audit, buhgalteriýa we salgyt maslahat beriş ulgamynda 20 ýyldan gowrak iş tejribesine eýe, işgärlerdäki auditorlar ygtybarly hünärmenlerdir.',
            "aboutUsText3":'Gözegçilik kompaniýasyny saýlanyňyzda, hyzmatlaryň bahasy bilen birlikde, işewürlik abraýy we tejribe möhüm rol oýnaýar. Şonuň üçin diňe doly jogapkärçilik we hil kepilligi bilen hakykatdanam gowy edip biljek işimizi edýäris!',
            "aboutUsText4":'Gözegçilik işlerini amala aşyrmak üçin ygtyýarnama 2021-nji ýylyň 28-nji dekabrynda Türkmenistanyň Ykdysadyýet we Maliýe ministrligi tarapyndan 1-17-29-50 belgili berildi.',
            "aboutUsText5":'"Anyk Hasap" işiňize hakyky peýdalary getirmäge, ýalňyşlyklardan goramaga, salgyt we maliýe töwekgelçiliklerini azaltmaga çalyşýar - ýokary hilli hyzmatlary bermäge.',
            "address":"Aşgabat şäheri, Oguzhan köçesi, 203-nji jaýy",
            "ourServicText":"Agyrynyň özi esasy saklaýyş ulgamy bolan söýgi. Köl esasy köçäni zäherli titreýänçä, oklary isleýär. Futboldan, bolmasa, bahasy möhümdir.",

        }
      },
      ru: {
        translation: {
            "homePage":"Главная",
            "OurServices":"Наши услуги",
            "address":"город Ашхабад, ул.Огузхана, дом 203",
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
            "sendMessage":"успешно отправлено",
            "aboutUsText1":'Аудиторская компания «Anyk Hasap» с 2018 года предоставляет широкий спектр услуг в области аудита, бухгалтерского учета, налогообложения и управленческого консультирования.',
            "aboutUsText2":'Аудиторы «Anyk Hasap», имеют более 20-и лет стажа безупречной работы в сфере аудита, бухгалтерского учета и налогового консультирования в организациях различных сфер деятельности, аудиторы в штате — все надёжные профессионалы.',
            "aboutUsText3":'При выборе аудиторской компании, наряду со стоимостью услуг, важную роль играют деловая репутация и опыт. Поэтому, мы беремся только за ту работу, которую можем выполнить действительно хорошо, с полной ответственностью и гарантией качества!',
            "aboutUsText4":'Лицензия на осуществление аудиторской деятельности выдан Министерством экономики и финансов Туркменистана №1-17-29-50 от 28.12.2021 года.',
            "aboutUsText5":'«Anyk Hasap» стремится принести реальную пользу вашему бизнесу, уберечь от ошибок, снизить налоговые и финансовые риски – предоставить услуги высокого качества.',
            "ourServicText":"Сама боль и есть любовь, главная система хранения. Озеру нужны стрелы, пока главная улица не выровняется с ядовитым колчаном. От футбола, если нет, то цена важна.",
            
        }
      }
    },
    keySeparator: false,
    interpolation: { escapeValue: false }
  });

export {i18n};
