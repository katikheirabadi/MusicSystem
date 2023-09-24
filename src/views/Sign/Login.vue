<template> 
  <v-sheet class="login mx-auto">
    <div class="mx-auto form" style="">
   
  <article>
    <div class="container" :class="{'sign-up-active' : signUp}">
      <div class="overlay-container">
        <div class="overlay" >
            <div class="overlay-right" v-if="signUp">
            <h2>Welcome Back!</h2>
            <p>Please login with your personal info</p>
            <button class="invert" id="signIn" @click="signUp = !signUp">Sign In</button>
          </div>
          <div class="overlay-left" v-else>
            <h2>Hello, Friend!</h2>
            <p>Please enter your personal details</p>
            <button class="invert" id="signUp" @click="signUp = !signUp">Sign Up</button>
          </div>
        </div>
      </div>
      <form class="sign-up" action="#">
        <h2>Create login</h2>
        <div>Use your email for registration</div>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
      </form>
      <form class="sign-in" action="#">
        <h2>Sign In</h2>
        <div>Use your account</div>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
      </form>
    </div>
  </article>
        </div>
  
  </v-sheet>

</template>

<script>
export default{
data(){
    return {
        signUp: false
    }
}
}
</script>
<style>
.login{
    width: 100%;
    height: 100vh; 
    background-color: rgb(0, 0, 0);
    border-radius: 5px;
    padding-left: 20%;
    padding-top: 3%;
    background: url(../../assets/wp2856288-hd-gif-wallpapers.gif);
    background-size: cover;
}
.container {
min-height: 600px;
background-color: rgb(225, 224, 221);
width: 70%;
border-radius: 15px;
border: solid 5px ;
position: relative;
overflow: hidden;
box-shadow: 0 25px 30px rgba(0, 0, 0, .2),
    0 20px 10px rgba(0, 0, 0, .2);
background: linear-gradient(to bottom, #efefef, #ccc);

  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform .5s ease-in-out;
    z-index: 100;
  }

  .overlay {
    position: relative;
    height: 100%;
    width: 200%;
    background: url('../../assets/wp8588708-dark-4k-mobile-wallpapers - Copy.jpg');
    color: #fff;
    transform: translateX(0);
    transition: transform .8s ease-in-out;
  } 
  
  @mixin overlays($property) {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 70px 40px;
    width: calc(50% - 80px);
    height: calc(100% - 140px);
    text-align: center;
    transform: translateX($property);
    transition: transform .5s ease-in-out;
  }

  .overlay-left {
    @include overlays(-30%);
  }

  .overlay-right {
    @include overlays(0);
    right: 0;
  }
}

h2 {
  margin: 0;
  padding: 3% 5%;
  padding-bottom: 1%;
}

p {
  margin: 0;
  padding: 1%;
  padding-bottom: 2%;
}

a {
  color: #222;
  text-decoration: none;
  margin: 15px 0;
  font-size: 1rem;
}

button {
  border-radius: 20px;
  border: 1px solid #009345;
  background-color: #009345;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform .1s ease-in;

  &:active {
    transform: scale(.9);
  }

  &:focus {
    outline: none;
  }
}

button.invert {
  background-color: transparent;
  border-color: #fff;
  margin-left: 5%;
}

form {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 0px;
  width: calc(50%);
  height: calc(100%);
  text-align: center;
  background: linear-gradient(to bottom, #efefef, #ccc);
  transition: all .5s ease-in-out;

  div {
    font-size: 1rem;
  }

  input {
    background-color: #eee;
    border: none;
    padding: 8px 15px;
    margin: 6px 0;
    width: calc(100% - 30px);
    border-radius: 15px;
    border-bottom: 1px solid #ddd;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, .4), 
      0 -1px 1px #fff, 
      0 1px 0 #fff;
    overflow: hidden;

    &:focus {
      outline: none;
      background-color: #fff;
    }
  }
}

.sign-in {
  left: 0;
  z-index: 2;
}

.sign-up {
  left: 0;
  z-index: 1;
  opacity: 0;
}

.sign-up-active {
  .sign-in {
    transform: translateX(100%);
  }

  .sign-up {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show .5s;
  }

  .overlay-container {
    transform: translateX(-100%);
  }

  .overlay {
    transform: translateX(50%);
  }
  .overlay-left {
    transform: translateX(0);
  }

  .overlay-right {
    transform: translateX(-50%);
    background: url('../../assets/wp11930591-music-black-and-white-wallpapers.jpg');
    height: 100%;
  }
}


</style>