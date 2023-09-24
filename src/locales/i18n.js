import {createI18n} from 'vue-i18n'

const messages = {
    fa: {
      message: {
        sitename:'سامانه کاروساز',
        header_sub:'سامانه کار و ساز با هدف جذب نیروهای توانمند و جویای کار در زمینه تدریس موسیقی و آموزش به علاقمندان این رشته راه اندازی شده است.',
        academies:'آموزشگاه ها',
        classes:'کلاس ها',
        about:'درباره ما',
        contact:'تماس با ما',
        sign :'ورود و ثبت نام',
        section1_header:'چرا کار و ساز؟',
        section1_detail:'پس از سالها آموزش موسیقی در مجموعه های خود(آموزشگاه موسیقی چگامه در کرج و آموزشگاه های موسیقی چگامه و می ر سی در تهران)بر آن شدیم تا با ایجاد سامانه ائی پویا امکان ارائه دوره های آموزشی به تمام نقاط کشور و حتی خارج را داشته باشیم. این سامانه کلیه فعالیت های درون سازمانی آموزشگاه ها را نیز پوشش می‌دهد و قابل استفاده برای تمامی آموزشگاه داران عزیز است. سامانه کار و ساز با هدف جذب نیروهای توانمند و جویای کار در زمینه تدریس موسیقی و آموزش به علاقمندان این رشته راه اندازی شده است.',
        section2_title:'کلاس ها',
        site_report_1:'آموزشگاه ها'
      },
      
    },
    en: {
      message: {
        sitename:'KaroSaz System',
        header_sub:'The job system has been launched with the aim of attracting capable and job-seeking forces in the field of music teaching and education for those interested in this field.',
        academies:'Academies',
        classes:'Courses',
        about: 'About Us',
        contact:'Contact Us',
        sign :'Sign in / Sign up',
        section1_header:'Why KaroSaz?',
        section1_detail:'After years of teaching music in our collections (Chagame music school in Karaj and Chagame and Mirsi music schools in Tehran), we decided to create a dynamic system to provide training courses to all parts of the country and even abroad. to be This system also covers all internal activities of schools and can be used by all dear school owners. The job system has been launched with the aim of attracting capable and job-seeking forces in the field of music teaching and education for those interested in this field.',
        section2_title:'Courses',
        site_report_1:'Academies'
      }
    },
  }
  
  const i18n = new createI18n({
    locale: 'en',
    messages,
    
  })

  export default i18n