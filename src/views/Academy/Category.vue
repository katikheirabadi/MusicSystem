<template>
     <banner/>
     <myheader img="http://localhost:3000/src/assets/img/wp12166234-yamaha-piano-wallpapers.jpg" :header="$t('category.headertitle')+this.$route.params.academy" :text="$t('category.headertext')" :btns="[{text:$t('category.headerbtn'),link:'/'}]"/>
     <v-container>
     <v-row  >
        <v-col class="center-class" sm="12" md="4" lg="4" cols="12" v-for="category in categories" :key="category.id">
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
    </v-container>
 
</template>
<script >
import banner from '../../components/Banner.vue'
import myheader from '../../components/Header.vue'
export default{
    data(){
        return {
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

h5
{
  position:relative;
  text-shadow: 2px -8px 9px rgb(0,16,90,0.4);
  text-align:center;
  font-weight:bold;
  text-transform:uppercase;
  font-size:5rem;
  margin-top: -3.87rem;
  color:#cc5331;
  z-index:1;
}

.card 
{
  box-shadow: 10px 10px 30px 5px;
  border-radius: 10%;
  margin: 1rem 0 1rem 0 !important;
  width: 90%;
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
transform: scale(1.4);
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


</style>