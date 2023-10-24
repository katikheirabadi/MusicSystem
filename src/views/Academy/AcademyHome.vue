<template>
     <banner/>
     <myheader img="http://localhost:3000/src/assets/img/wp12166234-yamaha-piano-wallpapers.jpg" :header="$t('category.headertitle')+this.$route.params.academy" :text="$t('category.headertext')" :btns="[{text:$t('category.headerbtn'),link:'/'}]"/>
     <v-container>
      <!-- detail -->
      <section class="s1">
      <h1 class="text-center sectionheader" style="">{{ $t('category.resume') }} {{ this.$route.params.academy }}</h1>
      <v-row class="text-center">   
        <v-col cols="2" class="d-xs-none d-md-none d-lg-flex"></v-col>   
      <v-col md="3" lg="2" sm="12" cols="12" class="my-auto ">
      <v-sheet 
      class="my-auto detailcol" 
      >
      <v-sheet
      :rounded="'xl'"
      class="mx-auto my-auto text-center detail">
            <h2>+25</h2>
            <p>{{ $t('message.academies') }}</p>
      </v-sheet>
      </v-sheet>
      </v-col>
      <v-col  md="3" lg="2" sm="12" cols="12" class="my-auto ">
      <v-sheet 
      class="my-auto" 
      >
      <v-sheet
      :rounded="'xl'"
      class="mx-auto mx-auto my-auto text-center detail">
            <h2>+450</h2>
            <p>{{ $t('message.allusers') }}</p>
      </v-sheet>
      </v-sheet>
      </v-col>
      <v-col md="3" lg="2" sm="12" cols="12" class="my-auto ">
      <v-sheet 
      class="my-auto" 
      >
      <v-sheet
      :rounded="'xl'"
      class="mx-auto my-auto text-center detail">
            <h2>+66</h2>
            <p>{{ $t('message.teachers') }}</p>
      </v-sheet>
      </v-sheet>
      </v-col>
     <v-col  md="3" lg="2" sm="12" cols="12" class="my-auto " >
      <v-sheet 
      class="my-auto" 
      >
      <v-sheet
      :rounded="'xl'"
      class="mx-auto my-auto text-center detail">
            <h2>+256</h2>
            <p>{{ $t('message.gratuateds') }}</p>
      </v-sheet>
      </v-sheet>
      </v-col>

     </v-row>

      </section>

     </v-container>
     
      <!-- history of academy -->
      <section class="bg-deep-orange-lighten-4" style="padding-bottom: 4%;">
        <h2 class="sectionheader" style="">آشنایی با {{ this.$route.params.academy }}</h2>
        <v-row>
          <v-col class="center-class" sm="12" md="4" lg="4" cols="4" v-for="(item ,i) in items" :key="i">
            <v-sheet 
            
            elevation="20"
            style="border-radius: 20px; min-height: 250px;max-width: 400px;"
            class="mx-auto my-auto text-center"
            >
            <v-icon
            class="pt-2"
            :color="item.color"
            :size="80"
            :icon="item.icon"
          ></v-icon>
          <h2>{{ item.title }}</h2>
          <p>{{ item.desc }}</p>
            </v-sheet>
          </v-col>
        </v-row>
      
      </section>
     <v-container>
      <!-- categories -->
      <section>
        <h1 class="sectionheader" style="">دسته بندی ها</h1>
     <v-row  >
        <v-col class="center-class" sm="12" md="6" lg="4" cols="12" v-for="category in categories" :key="category.id">
            <v-card class="card" >
                <v-sheet class="img-hover-zoom img-hover-zoom--zoom-n-rotate">
                    <v-img
                    height="300"
                    cover=""
                    class="card-img-top img-hover-zoom"
                    :src="category.img"
                    ></v-img>
                </v-sheet>
                <v-sheet
                class="card-body"
                >
                <h5 class="card-title">
						{{ category.name }}
					</h5>
					<p class="card-text">
						{{ category.text }}
					</p>
                    <router-link to="/" class="btn hvr-bounce-to-bottom">{{ $t('category.gotocourses') }}</router-link>
                </v-sheet>
            </v-card>           
        </v-col>
        
     </v-row>
      </section>
      

        <!-- teachers  -->
      <section class="s5">
        <h1 class="sectionheader" style=" padding-inline-start: 13%;font-size:30px;">اساتید {{ this.$route.params.academy }} </h1>
        <v-row>
        <v-col cols="12">
         <div class="ccontainer">
            <div class="person-card">
               <div class="person-card-photo">
               <img src="../../assets/img/73.jpg"/>
              </div>
              <div class="person-card-info">
                <h2>Стивен Хокинг</h2>
                <p>8 января 1942 - 14 марта 2018</p>
            </div>
      </div> 
    </div>
      <v-pagination :length="5">
  </v-pagination>
  
    </v-col>
  </v-row>

 </section>

    </v-container>
 
</template>
<script >
import banner from '../../components/Banner.vue'
import myheader from '../../components/Header.vue'
export default{
    data(){
        return {
          items: [
        {
          color: 'red-darken-3',
          icon: 'fa fa-hourglass-start',
          title:'شروع کار',
          desc:'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
        },
        {
          color: 'red-darken-3',
          icon: 'fa fa-graduation-cap',
          title:'خدمان آموزشگاه',
          desc:'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
        },
        {
          color: 'red-darken-3',
          icon: '	fa fa-key',
          title:'هم اکنون',
          desc:'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
        }
      ],
      categories:[
                {
                    name:'پیانو',
                    img:window.location.origin + '/src/assets/img/pianp.jpg',
                    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti suscipit sapiente laboriosam eveniet itaque sequi rerum animi minima ab nihil, molestiae similique asperiores, veniam obcaecati.',
                    id:1
                },
                {
                    name:'ویالون',
                    img:window.location.origin + '/src/assets/img/p2.jpg',
                    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti suscipit sapiente laboriosam eveniet itaque sequi rerum animi minima ab nihil, molestiae similique asperiores, veniam obcaecati.',
                    id:2
                },
                {
                    name:'گیتار',
                    img:window.location.origin + '/src/assets/img/g.jpg',
                    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti suscipit sapiente laboriosam eveniet itaque sequi rerum animi minima ab nihil, molestiae similique asperiores, veniam obcaecati.',
                    id:3
                }
            ]
        }
    },
    components:{
        banner,myheader
    }
   
}
</script>
<style>
*
{
  
  -webkit-transition: all .2s ease-out;
  -moz-transition: all .2s ease-out;
  -ms-transition: all .2s ease-out;
  -o-transition: all .2s ease-out;
  transition: all .2s ease-out;
}
.s1{
  margin-bottom: 1.5%;
}
.sectionheader{
  justify-content: center;
  display: flex;
  font-weight: bold;
  font-size: 30px;
  color: #cc5331;
  margin-top: 20px;
  margin-bottom: 20px;
}
.card-title{
  position:relative;
  text-shadow: 2px -8px 9px rgb(0,16,90,0.4);
  text-align:center;
  font-weight:bold;
  text-transform:uppercase;
  font-size:3rem;
  margin-top: -3.87rem;
  color:#cc5331;
  z-index:1;
}

.detail{
    height: 100%;
    font-size: 25px;
    padding-top: 5%;
    padding-bottom: 6%;
    min-width: 80%;
    font-weight: bold;
    font-family: 'IRANSANS';
    color: #a03e23;
    border: 3px solid #da3e14;
    box-shadow: 2px 2px 9px #a03e23;
  }
.detail p{
      font-family: 'IRANSANS' !important;
      font-weight: bold;
      font-size: 20px !important;
      color: #5b1505;
  }
.card 
{
  box-shadow: 10px 10px 30px 5px;
  border-radius: 10%;
  width:95%;
}


a.btn
{
  width:100% !important;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 0px;
  border-radius:0;
  text-transform:uppercase;
  font-weight:bold;
  font-size:1.1rem;
  background-color: #ff673d;
  text-align: center;
  color: #ffffff !important;
  padding:3% !important;
  width: fit-content;
  display: flex;
  justify-self: center;
}

.card:hover h5.card-title {
-moz-transform: scale(1.1);
-webkit-transform: scale(1.1);
-o-transform: scale(1.1);
-ms-transform: scale(1.1);
transform: scale(1.2);
}

/* https://ianlunn.github.io/Hover/ I'm sorry for the minify, it takes up less space so... */
[class^="hvr-"] {margin: .4em;padding: 1em;text-transform: uppercase;cursor: pointer;border-top:4px solid rgb(244, 165, 165);text-decoration: none;-webkit-font-smoothing: antialiased;}
.hvr-bounce-to-bottom{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:.5s;transition-duration:.5s}
.hvr-bounce-to-bottom:before{content:"";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:rgb(180, 57, 57);-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-duration:.5s;transition-duration:.5s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}
.hvr-bounce-to-bottom:active,.hvr-bounce-to-bottom:focus,.hvr-bounce-to-bottom:hover{color:#1c1f23;}
.hvr-bounce-to-bottom:active:before,.hvr-bounce-to-bottom:focus:before,.hvr-bounce-to-bottom:hover:before{-webkit-transform:scaleY(1);transform:scaleY(1);-webkit-transition-timing-function:cubic-bezier(.52,1.64,.37,.66);transition-timing-function:cubic-bezier(.52,1.64,.37,.66)}


/* The tutorial I used : https://w3bits.com/css-image-hover-zoom/ */
/* [1] The container */
.img-hover-zoom {
  overflow: hidden; /* [1.2] Hide the overflowing of child elements */
}

/* Transition property for smooth transformation of images */
.img-hover-zoom img {
  transition: transform .5s ease;
}

/* Zoom-n-rotate Container */
.img-hover-zoom--zoom-n-rotate img {
  transition: transform .5s ease-in-out;
}

/* The Transformation */
.img-hover-zoom--zoom-n-rotate:hover img {
  transform: scale(1.6) rotate(10deg);
}
.s5{
      margin-top: 10%;
    }
.ccontainer {
      height: 100%;
      display: flex;
      background-color: #FFCCBC;
     }
    
    .person-card {
      display: flex;
      position: relative;
      margin: auto;
      border-radius: 5px;
      background-color: #ff673d;
      color: white;
      transition: all 0.4s; }
      .person-card:hover {
        cursor: pointer;
        transform: translateY(-10px);
        box-shadow: 10px 10px 35px #111; }
        .person-card:hover .person-card-photo {
          padding: 4px;
          transform: translateY(-1rem); }
      .person-card .person-card-photo {
        box-sizing: border-box;
        border: 0px solid #182028;
        padding: 0;
        overflow: hidden;
        height: 25rem;
        width: 20rem;
        margin: -10rem 2.5rem 3rem 3rem;
        transition: all 0.4s; }
        .person-card .person-card-photo > img {
          height: 25rem;
          position: relative;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%); }
      .person-card .person-card-info {
        padding: 2rem 3rem; }
        .person-card .person-card-info > h2 {
          font-size: 2rem; }
        .person-card .person-card-info > p {
          opacity: 0.7; }

</style>