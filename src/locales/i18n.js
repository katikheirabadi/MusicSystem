import {createI18n} from 'vue-i18n'

const messages = {
    fa: {
      banner:{
        home:'کاروساز',
        academies:'آموزشگاه ها',
        certificate:'استعلام گواهینامه',
        about:'درباره ما',
        sign :'ورود و ثبت نام',
      },
      footer:{
        phonetitle:"شماره تماس",
        emailtitle:"ایمیل",
        addresstitle:"آدرس",
        detailtitle:"آغاز کاروساز",
        detail:'پس از سالها آموزش موسیقی در مجموعه های خود(آموزشگاه موسیقی چگامه در کرج و آموزشگاه های موسیقی چگامه و می ر سی در تهران)بر آن شدیم تا با ایجاد سامانه ائی پویا امکان ارائه دوره های آموزشی به تمام نقاط کشور و حتی خارج را داشته باشیم. .',
        sicialmediatitle : "شبکه های اجتماعی",
        instagram:'آیدی اینستاگرام',
        telegram:'آیدی تلگرام',
        facebook:'آیدی فیسبوک',
        youtube:'آیدی کانال یوتیوب',
        etemad :"نماد اعتماد"

      },    
      home:{
        teachers:'اساتید',
        allusers:'کاربران',
        resume:' سوابق کاروساز در نگاهی کوتاه ',
        academies:'آموزشگاه ها',
        gratuateds:'فارع التحصیلان',
        section1_header:'چرا کار و ساز؟',
        section1_detail:'پس از سالها آموزش موسیقی در مجموعه های خود(آموزشگاه موسیقی چگامه در کرج و آموزشگاه های موسیقی چگامه و می ر سی در تهران)بر آن شدیم تا با ایجاد سامانه ائی پویا امکان ارائه دوره های آموزشی به تمام نقاط کشور و حتی خارج را داشته باشیم. این سامانه کلیه فعالیت های درون سازمانی آموزشگاه ها را نیز پوشش می‌دهد و قابل استفاده برای تمامی آموزشگاه داران عزیز است. سامانه کار و ساز با هدف جذب نیروهای توانمند و جویای کار در زمینه تدریس موسیقی و آموزش به علاقمندان این رشته راه اندازی شده است.',
      },
      category:{
        headertitle:"آمورشگاه ",
        headertext:"سامانه کاروساز با آموزشگاهای بسیاری همکاری می کند...",
        headerbtn:"نمایش کلاس ها",
        gotocourses:"دوره ها",
        resume:'نتایج عملکرد ',
      },
      academy:{
        list_header_subtitle :'در این قسمت لیست تمامی آموزشگاهای فعال در سامانه را مشاهده می کنسد. با انتخاب هر کدام اطلاعات آموزشگاه برای شما نمایش داده می شود.',
        list_phone : 'شماره تماس',
        list_back :'بازگشت به خانه',
        home_categories:'دسته بندی های آموزشگاه',
        gratuateds:'فارع التحصیلان',
        teachers:'اساتید',
        allusers:'کاربران',
        products:'دوره های درحال اجرا'
      },
      lesson:{
        list_title :'درس های آموزشگاه ',
        list_subtitle: 'در این قسمت لیست تمامی درس های آموزشگاه را مشاهده می کنید. با انتخاب هر کدام اطلاعات دوره های درس برای شما نمایش داده می شود.',
        list_lessonstitle:'کدوم ساز انتخاب میکنی؟؟؟؟؟',
        list_visit:'بازدید',
        list_products:'دوره ها',
        home_tags:'کلمات کلیدی',
        home_tagsDescs:'موضوعات کلیدی',
        home_products:'دوره های فعال',
        home_startdate:'تاریخ شروع',
        home_info:'جزئیات',
        home_price:'مبلغ',
        home_priceunit:'ریال',
        home_discount:'تخفیف',
        home_days:'روزهای هفته',
        home_hour:'ساعت',
        home_sessioncount:'تعداد جلسات',
        home_sessionsumHours:'مجموع ساعت',
        home_endprice:'مبلغ پرداختی',
        home_buy:'ثبت نام',
        home_councelling:'مشاوره',
        home_noproducts:'کلاسی برای این دوره فعال نمی باشد',
        home_registertitle:'ثبت نام',
        home_registertext:'ساعت مورد نظر جهت ثبت نام انتخاب کرده و برای افزودن به سبد خرید دکمه مربوطه را کلیک کنید',
        home_registerpastitle:'زمان  کلاس ها',
        home_modalclose:'بستن',
        home_gotobag:'افزودن به سبد خرید'

      },
      message: {
        sitename:'سامانه کاروساز',
        header_sub:'سامانه کار و ساز با هدف جذب نیروهای توانمند و جویای کار در زمینه تدریس موسیقی و آموزش به علاقمندان این رشته راه اندازی شده است',
        showallacademies:'نمایش آموزشگاه ها',
        error:'خطا',
      
        classes:'کلاس ها',
        detail:'مشاهده دوره',
        details:' دسته بندی ها',
      
        contact:'تماس با ما',
       
       
        Accademiessection_title:'کدوم آموزشگاه؟؟',
       
        section2_title:'چه سازی دوست داری؟!',
        site_report_1:'آموزشگاه ها',
        login_login_header:'ورود به سامانه کاروساز',
        login_login_username:'نام کاربری',
        login_login_pass:'رمز عبور',
        login_login_signupheader:'هنرجوی عزیز سلام',
        login_login_signupmessage:'صفحه شخصی خودتو بساز',
        login_login_loginbtn:' ورود ',
        login_login_signupbtn:'ثبت نام',
        login_signup_header:'ثبت نام در سامانه',
        login_signup_name:'نام',
        login_signup_lastname:'نام خوانوادگی',
        login_signup_PhoneNumber:'شماره موبایل',
        login_signup_natinalcode:'شماره ملی',
        login_signup_pass:'رمز عبور',
        login_signup_Confirmpass:'تکرار رمز عبور',
        login_signup_signinheader:'!!خوش برگشتی',
        login_signup_signinmessage:'با مشخصات خودت بیا'
      },
      
    },
    en: {
      banner:{
        home:'Home',
        academies:'Academies',
        certificate:'Validate Certificates',
        about:'About Us',
        sign :'Sign in / Sign up',
      },
      category:{
        headertitle:"Academy",
        headertext:"The Karosaz system cooperates with many schools...",
        headerbtn:"All Academies",
        gotocourses:"Courses"
      },
      message: {
        sitename:'KaroSaz System',
        header_sub:'The job system has been launched with the aim of attracting capable and job-seeking forces in the field of music teaching and education for those interested in this field.',
        showallacademies:'All Academies',
        gratuateds:'Graduates',
        teachers:'All Teachers',
        allusers:'All Users',
        classes:'Courses',
        detail:'Detail',
        details:'Categories',
        resume:'Up To Now...',
        contact:'Contact Us',
        Accademiessection_title:'Which Academy..?',
        section1_header:'Why KaroSaz?',
        section1_detail:'After years of teaching music in our collections (Chagame music school in Karaj and Chagame and Mirsi music schools in Tehran), we decided to create a dynamic system to provide training courses to all parts of the country and even abroad. to be This system also covers all internal activities of schools and can be used by all dear school owners. The job system has been launched with the aim of attracting capable and job-seeking forces in the field of music teaching and education for those interested in this field.',
        section2_title:'Courses',
        site_report_1:'Academies',
        login_login_header:'Sign in to Karosaz',
        login_login_username:'Username',
        login_login_pass:'Password',
        login_login_signupheader:'Hello,Friend!!',
        login_login_signupmessage:'Please enter your personal details...',
        login_login_loginbtn:'Sign In',
        login_login_signupbtn:'Sign Up',
        login_signup_header:'Create Your Account',
        login_signup_name:'First Name',
        login_signup_lastname:'Last Name',
        login_signup_PhoneNumber:'Phone Number',
        login_signup_natinalcode:'Natinalcode',
        login_signup_pass:'Password',
        login_signup_Confirmpass:'Confirm Password',
        login_signup_signinheader:'Welcome Back!!',
        login_signup_signinmessage:'Please login with your personal info'
      }
    },
  }
  
  const i18n = new createI18n({
    locale: 'fa',
    messages,
    
  })

  export default i18n