import {createI18n} from 'vue-i18n'

const messages = {
    fa: {
      banner:{
        home:'کار و ساز',
        academies:'آموزشگاه ها',
        certificate:'استعلام گواهینامه',
        about:'درباره ما',
        sign :'ورود و ثبت نام',
        account:'ورود به پنل کاربری',
        exit:'خروج',
        shoppingbag:'سبدخرید شما'
      },
      footer:{
        phonetitle:"شماره تماس",
        emailtitle:"ایمیل",
        addresstitle:"آدرس",
        detailtitle:"آغاز کار و ساز",
        detail:'پس از سالها فعالیت در حوزه آموزش و علی الخصوص موسیقی بر آن شدیم تا با ایجاد سامانه ائی پویا امکان ارائه کلاس های آموزشی به تمام نقاط کشور و حتی خارج را داشته باشیم. این سامانه کلیه فعالیت های درون سازمانی آموزشگاه ها را پوشش می‌دهد و قابل استفاده برای تمامی آموزشگاه داران عزیز است. سامانه کار و ساز با هدف جذب نیروهای توانمند و جویای کار در زمینه تدریس موسیقی و آموزش به علاقمندان این رشته راه اندازی شده است.',
        Accademiessection_title:'کدوم آموزشگاه میخوای بری؟؟',
        sicialmediatitle : "شبکه های اجتماعی",
        instagram:'آیدی اینستاگرام',
        telegram:'آیدی تلگرام',
        facebook:'آیدی فیسبوک',
        youtube:'آیدی کانال یوتیوب',
        etemad :"نماد اعتماد",
        address:'البرز ،فردیس ،فلکه سوم <br>،خیابان ٢٣ ،پلاک ٢٩',
        email:'info@karosaz.com',
        phone:'09122883802 <br> 026-36503521'
      },    
      home:{
        sitename:'سامانه کار و ساز',
        header_sub:'سامانه کار و ساز با هدف جذب نیروهای توانمند و جویای کار در زمینه تدریس موسیقی و آموزش به علاقمندان این رشته راه اندازی شده است',
        showallacademies:'نمایش آموزشگاه ها',
        teachers:'اساتید',
        allusers:'کاربران', 
        resume:' کار و ساز در یک نگاه ',
        academies:'آموزشگاه ها',
        gratuateds:'فارغ التحصیلان',
        section1_header:'چرا کار و ساز؟',
        section1_detail:'پس از سالها فعالیت در حوزه آموزش و علی الخصوص موسیقی بر آن شدیم تا با ایجاد سامانه ائی پویا امکان ارائه کلاس های آموزشی به تمام نقاط کشور و حتی خارج را داشته باشیم. این سامانه کلیه فعالیت های درون سازمانی آموزشگاه ها را پوشش می‌دهد و قابل استفاده برای تمامی آموزشگاه داران عزیز است. سامانه کار و ساز با هدف جذب نیروهای توانمند و جویای کار در زمینه تدریس موسیقی و آموزش به علاقمندان این رشته راه اندازی شده است.',
        Accademiessection_title:'کدوم آموزشگاه میخوای بری؟؟',
        details:' دسته بندی ها',
        optionheader:'چرا کار و ساز انتخاب کنم؟؟',
        optionone:` <img
        src="../src/assets/img/1.png"
        style="width: 50%;"
       />
       <h5 class="text-center pb-5">مدیریت کلیه امور داخلی آموزشگاه<br/>هرزمان و هرمکان</h5>
      `,
      optiontwo:` <img
      src="../src/assets/img/4.jpg"
      style="width: 50%;"
     />
     <h5 class="text-center pb-5">امکان برگزاری کلاس<br> آنلاین و غیرحضوری</h5>
    `,
    optionthree:` <img
      src="../src/assets/img/2.png"
      style="width: 50%;"
     />
     <h5 class="text-center pb-5">برگزاری آزمون و <br>اراثه گواهینامه با QRCode</h5>
    `,
    optionfour:` <img
      src="../src/assets/img/3.png"
      style="width: 50%;"
     />
     <h5 class="text-center pb-5">ارزیابی استاد و آموزشگاه<br> توسط شما</h5>
    `
      
      },
      category:{
        headertitle:" آموزشگاه ",
        headertext:"سامانه کار و ساز با آموزشگاهای بسیاری همکاری می کند...",
        headerbtn:"نمایش کلاس ها",
        gotocourses:"کلاس ها",
        resume:'نتایج عملکرد ',
      },
      academy:{
        list_header_subtitle :'کلاس های آموزشگاه ببین و انتخاب کن تا جزییات کلاس ها برای شما نمایش داده شود',

        list_phone : 'شماره تماس',
        list_back :'بازگشت به خانه',
        home_categories:'دسته بندی های آموزشگاه',
        gratuateds:'فارغ التحصیلان',
        teachers:'اساتید',
        allusers:'کاربران',
        products:'کلاس های درحال اجرا',
        btn:'جزئیات'
      },
      lesson:{
        emptylist:'کلاسی در این دسته بندی وجود ندارد',
        list_title :'کلاس‌های آموزشگاه',
        list_subtitle :'کلاس های آموزشگاه ببین و انتخاب کن تا جزییات کلاس ها برای شما نمایش داده شود',

        list_lessonstitle:'کدوم ساز انتخاب میکنی؟؟؟؟؟',
        list_visit:'بازدید',
        list_products:'کلاس ها',
        home_tags:'کلمات کلیدی',
        home_tagsDescs:'موضوعات کلیدی',
        home_products:'کلاس های فعال',
        home_startdate:'تاریخ شروع',
        home_info:'جزئیات',
        home_price:'مبلغ',
        home_priceunit:'ریال',
        home_discount:'تخفیف',
        home_days:'روزهای هفته',
        home_hour:'ساعت',
        home_sessioncount:'تعداد جلسات',
        home_remainSession:'جلسات باقیمانده',
        home_sessionsumHours:'مجموع ساعت',
        home_endprice:'مبلغ پرداختی',
        home_buy:'ثبت نام',
        home_councelling:'مشاوره',
        home_noproducts:'کلاسی برای این کلاس فعال نمی باشد',
        home_registertitle:'ثبت نام',
        home_registertext:'ساعت مورد نظر جهت ثبت نام انتخاب کرده و برای افزودن به سبد خرید دکمه مربوطه را کلیک کنید',
        home_registerpastitle:'زمان  کلاس ها',
        home_modalclose:'بستن',
        home_gotobag:'افزودن به سبد خرید',
        home_advise:'مشاوره',
        home_advisetext:'روز و ساعت درخواست خودرا وارد کنید.',
        home_advisehour:'ساعت',
        home_adviseday:'روز',
        home_adviseclose:'بستن',
        home_adviseadd:'ثبت درخواست مشاوره',
        today:'امروز',
        tomorrow:'فردا',
        twodaylater:'پس فردا',
        adviseeroor : 'لطفا یک ساعت را انتخاب کنید.',
        advisedayeroor : 'لطفا یک روز را انتخاب کنید.'
      },
      panel:{
        editprofile:{
          selectcompany:'',
          infotitle:'مشخصات فردی',
          uploadimg:'بارگذاری تصویر جدید',
          name:'نام',
          familyname:'نام خانوادگی',
          phone:'شماره همراه',
          email:'ایمیل',
          female:'زن',
          male:'مرد',
          updateinfobtn:'ویرایش اطلاعات فردی',
          passtitle:'ویرایش رمز عبور',
          oldpass:'رمز عبور فعلی',
          pass:'رمز عبور جدید',
          confirmpass:'تکرار رمز عبور جدید',
          updatepassbtn:'ویرایش  رمز عبور',
          required:'پرکردن این فیلد الزامی است',
          passlen:'حداقل تعداد کارکترهای رمز عبور 8 حرف می باشد',
          confirm:'باید با مقدار رمز عبور برابر باشد',
          passvaliderror:'اطلاعات لازم را پرکنید'
        },
        credit:{
          priceunit:'ریال',
          mycredir:'اعتبار من',
          mycharge:'هدیه‌های من',
          addcredittitle:'افزایش اعتبار از طریق بانک',
          addcreditdesc:'برای افزایش اعتبار از طریق بانک، لطفا ابتدا مبلغ مد نظر را نوشته و دکمه پرداخت را بزنید.',
          addcreditfield:'مبلغ (ریال)',
          addcreditbtn:'پرداخت',
          addreqtitle:'درخواست افزایش اعتبار',
          addreqdesc:'برای ثبت درخواست افزایش اعتبار، لطفا ابتدا مبلغ مد نظر و عکس رسید پرداختی را آپلود کرده و دکمه ثبت درخواست را بزنید.',
          addreqimg:' بارگذاری رسید',
          addreqbtn:'ثبت درخواست',
          transferttitle:'انتقال اعتبار',
          transferdesc:'برای انتقال اعتبار، لطفا ابتدا مبلغ مد نظر و کد ملی دوستتان را نوشته و دکمه انتقال را بزنید.',
          transfernatinal:'کدملی',
          transferbtn:'انتقال',
          selectcompany:'آموزشگاه خد را انتخاب کنید',
          changeActivcompany:'تغییر آموزشگاه',
          amountfull:'پرکردن این قسمت الزامی است',
          natinalfull:'پرکردن این قسمت الزامی است',
          natinallen:'کد ملی باید 11 رقم باشد',
          reqfull:'پرکردن این قسمت الزامی است',
         successreq:'درخواست شما با موفقیت ثبت شد',
         creditreprttitle:'گزارش صندوق نقدی',
         reportdate:'تاریخ',
         reqdesc:'توضیحات',
         reqproductname:'نام کلاس',
         reqprice:'مبلغ',
         reqnow:'مانده',
         reqtype:'تراکنش',
         reqno:'موردی یافت نشد',
         chargereporttitle:'هدایای من'
        },
        requests:{
          deletereqtab:'درخواست های انصراف',
          suggestiontab:'انتقاد و پیشنهادات',
          deleteproductname:'نام کلاس',
          deletehour:'ساعت برگزاری',
          deletedate:'تاریخ درخواست',
          deletestate:'وضعیت',
          sugproductname:'نام کلاس',
          sughour:'ساعت برگزاری',
          sugdate:'تاریخ درخواست',
          sugtype:'نوع درخواست',
          sugtext:'متن درخواست',
          sugcomment:'جواب درخواست',
          empty:'درخواستی ثبت نکرده اید'
        },
      },
      survey:{
        subtitle:'جهت بهبود عملکرد بخش های متفاوت لطفا فرم نظرسنجی را کامل بفرمایین.',
        btn:'ارسال نطرسنجی',
        notcomplete:'شما به همه سوالات جواب نداده اید',
        send:' به زودی به صفحه کاربری خود باز خواهید گشت'
      },
    
      login:{
        login_login_header:'ورود به سامانه کار و ساز',
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
        login_signup_signinmessage:'با مشخصات خودت بیا',
        loginacademies:'آموزشگاه',
        loginbtn:'ورود به سامانه',
        registerbtn:'ثبت نام'
      },
      message: {
       
        error:'خطا',
        ok:'بله',
        cancel:'خیر',
        unit:'ریال',
        classes:'کلاس ها',
        detail:'مشاهده کلاس',
        contact:'تماس با ما',
        section2_title:'چه سازی دوست داری؟!',
        site_report_1:'آموزشگاه ها',
       
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