<template lang="html">
  <div class="riddle">
    <h1 class="landing-component centered splash-text pulseText" id="seeker-splash" @click="slideIn">
      SEEK TRUTH
    </h1>
    <h1 class="landing-component centered colon pulseText">:</h1>
    <form class="landing-form" @submit.prevent="handleSubmit">

      <!-- <img src="https://static.thenounproject.com/png/499640-200.png" class="app-logo landing-component"> -->
      <img src="https://images.vexels.com/media/users/3/137627/isolated/preview/012f7bd53633f5a6e78e60ea08948c55-minimalist-infinity-logo-by-vexels.png" class="app-logo landing-component pulseText">

      <input type="text" name="" placeholder="******" class="landing-component login-component pulseText" v-model="answer">



    </form>
      <!-- <button  class="landing-component centered codeword-entry">VIEW DOCUMENT</button> -->
      <div class="page-container" id="secret-document">
        <button @click="slideOut" class="hide-document">HIDE DOCUMENT</button>
        <img src="https://www.onlygfx.com/wp-content/uploads/2017/12/classified-stamp-1.png" class="stamp">
        <img src="../assets/gov_logo.png" class="gov-logo">

        <h1 class="centered secret-declaration">

          <div id="myDiv">
              <span class="Normal">MOST SECRET</span>
              <span class="OnHover">中华人民共和国国家安全部</span>
          </div>


        </h1>
        <h3 class="centered heading">NATSEN:CANUKUS BURN AFTER USE</h3>
        <p class="paragraph centered paragraph-heading">GCHQ NATSEC PANDEMIC UNIT</p>

          <p class="addresse left"><span class="blackout">Defence Secretary Wallace</span></p>
          <p class="addresse left">SW1A 2ET</span></p>
          <p class="addresse left last-address">Whitehall</p>

        <h1 class="centered">{{formatAnswer}}</h1>
        <p class="paragraph centered"><span class="large-font">C</span>oronavirus cases rapidly increasing and on schedule <span class="blackout">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Pulvinar pellentesque habitant morbi tristique senectus et netus et. In nisl nisi scelerisque eu ultrices. Turpis cursus in hac habitasse platea. Nisl purus in mollis nunc sed id. Volutpat diam ut venenatis tellus in metus. Purus gravida quis blandit turpis cursus in. Quis blandit turpis cursus in hac habitasse.</span>public health services overwhelmed and undermined <span class="blackout"> facilisi nullam vehicula  ipsum a. Est placerat in egestas erat imperdiet sed euismod nisi. Convallis a cras semper auctor neque.</span>

        <span class="blackout">Pellentesque eu tincidunt tortor aliquam nulla facilisi. Netus et malesuada fames ac. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam.</span><span class="red">highly dangerous airborne pathogen <span class="clue">{{wordArray[0]}}</span> class</span><span class="blackout">nulla malesuada pellentesque elit eget gravida cum. Sed id semper risus in hendrerit gravida rutrum quisque non. Id aliquet risus feugiat in ante metus dictum at tempor. Integer vitae justo eget magna. Non diam phasellus vestibulum lorem. Vitae nunc sed velit dignissim sodales ut eu sem.</span> Coronaviruses are <span class="clue">{{wordArray[1]}}</span> assets. Proceed with caution and inform the pre-approved parties.
        <p class="paragraph centered">
                  <span class="blackout"> Fames  ac turpis egestas sed. Gravida cum sociis natoque penatibus et. Lorem sed risus ultricies tristique nulla. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. In arcu cursus euismod quis. Nec nam aliquam sem et tortor consequat id. Pellentesque habitant morbi tristique senectus et netus et. In hac habitasse platea dictumst quisque sagittis purus sit. Velit scelerisque in dictum non consectetur a erat. Urna nec tincidunt praesent semper. Pellentesque nec nam aliquam sem et</span>
        </p>
        <p class="paragraph centered" id="last-paragraph">
          Common signs of infection include respiratory symptoms, fever, cough, shortness of breath and breathing difficulties. In more severe cases, infection can cause pneumonia. <span class="clue">{{wordArray[2]}}</span> often reports severe acute respiratory syndrome, kidney failure and even death within minimal timeframes.
          <span class="blackout">
          Congue nisi vitae suscipit tellus mauris. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Sed blandit libero volutpat sed cras ornare arcu. Sapien et ligula ullamcorper malesuada. Rutrum quisque non tellus orci ac auctor. Et odio pellentesque diam volutpat commodo sed egestas. Id consectetur purus ut faucibus pulvinar.</span> <span class="clue">{{wordArray[3]}} {{wordArray[4]}}</span> will be asked to self-isolate for seven days after showing mild symptoms under the new approach, the UK's chief medical adviser <span class="blackout">Prof Chris Whitty</span> said.
          <span class="blackout" >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est</span>extends his warm thanks to <span class="clue">{{wordArray[5]}}. </span>
          <p class="centered space-bottom">DESTROY THIS DOCUMENT</p>
        </p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Coat_of_Arms_of_British_Monarch_%28Golden_Fleece_Variant%29.svg" class="gov-crest centered">
      </div>


  </div>


</template>

<script>
import { eventBus } from '@/main.js'
export default {
  name: 'riddle',
  data(){
    return {
      answer: "",
      wordArray: [],
    }
  },
  props: ['selectedRiddle'],
  computed: {
    formatAnswer: function() {
      if (this.selectedRiddle.riddleQuestion) {
        this.wordArray = this.selectedRiddle.riddleQuestion.split(" ");

      }
    },
  },
  methods: {
  reduceLetterSpacing(){
    const splashText = document.getElementById('seeker-splash');
    splashText.classList.add('reduceSpacing');
    },
  increaseLetterSpacing(){
    const splashText = document.getElementById('seeker-splash');
    splashText.classList.remove('reduceSpacing');
    },
  slideIn(){
    this.reduceLetterSpacing();
    const topSecretDocument =  document.getElementById('secret-document');
    topSecretDocument.classList.add('slideIn');
    },
  slideOut(){
    this.increaseLetterSpacing();
    const topSecretDocument =  document.getElementById('secret-document');
    topSecretDocument.classList.remove('slideIn');

    },


    handleSubmit() {
      eventBus.$emit('submitted-user-answer', {
        shindigId: this.selectedRiddle.shindigId,
        userAnswer: this.answer
      })
    },
  },

}
</script>

<style lang="css" scoped>
.riddle {

  height: auto;
  width: auto;

  padding: 0px;
  margin: 0px;
}
.blackout {
  background-color: black;
  color: black;
  user-select: none;
}
.centered {
  text-align: center;
}
.left {
  text-align: left;
}
.right {
  text-align: right;
}
.spacing {
  color: transparent;
}
.paragraph {
  width: 80%;
  height: auto;
  text-align: center;
  margin: auto;
  font-size: 16px;
}
.heading {
  text-decoration: underline;
  font-size: 28px;
  margin: 15px;
  padding-top: 20px;
}
.stamp{
  height: 150px;
  width: 300px;
  position: absolute;
  left: 45%;
  top: 45%;
  z-index: 1;
  filter: blur(0.8px);
  pointer-events: none;
  transform: rotateZ(13deg);
  display: none;
}
.gov-logo {
  position: absolute;
  left: 7%;
  top: 7%;
  height: 100px;
  width: 120px;
  opacity: 0.4;
}
.gov-crest {
  height: 100px;
  width: 100px;
  display: block;
margin-left: auto;
margin-right: auto;
padding-bottom: 30px;

}
.left {
  text-align: left;
}
.page-container {
  width: auto;
  transform: translateY(100vh);
  max-width: 70%;
  height: 90%;
  line-height: 20px;
  margin: auto;
  background-color: white;
  background-image: linear-gradient(to right, rgba(255,210,0,0.4), rgba(200, 160, 0, 0.1) 11%, rgba(0,0,0,0) 35%, rgba(200, 160, 0, 0.1) 65%);
box-shadow: inset 0 0 75px rgba(255,210,0,0.3), inset 0 0 20px rgba(255,210,0,0.4), inset 0 0 30px rgba(220,120,0,0.8);
  border-radius: 5px;
  font-family: 'Nanum Gothic Coding', monospace;
  transition: all 1s;
  opacity: 0;
}
.slideIn {
  transform: translateY(-55vh);
  transition: transform 2s;
  opacity: 1;
}
.addresse {
  text-align: left;
  padding-left: 5em;
  line-height: 20px;

}
.last-address {
  margin-bottom: 20px;
}

.landing-form {
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
}
.large-font {
  font-size: 34px;
}
.landing-component {
  font-family: 'Nanum Gothic Coding', monospace;
  background-color: inherit;
  letter-spacing: 10px;
  font-size: 24px;
  margin: auto;
  background-color: transparent;
  border: none;
  margin-top: 15px;
}
.app-logo {
  width: 300px;
  height: 300px;
  margin-top: 5vh;


  transform: scale(1);


}

.codeword-entry {
  color: white;
  border-radius: 5px;
  letter-spacing: 7px;
  width: 100%;
  outline: none;
}
.codeword-entry:hover {
  color: red;
  border-radius: none;
}
.paragraph-heading {
  margin-bottom: 35px;
}
.login-component {
  text-align: center;
  color: white;

}
.hide-document {

  font-size: 12px;
  color: white;
  background-color: red;
  border-left: solid red 15px;
  box-shadow: 15px;

}
.hide-document:hover {
  border-left:solid white 15px;
  background-color: white;
  color: red;

}
.splash-text {
  width: 100%;
  letter-spacing: 2em;
  text-align: center;
  color: gray;
  transition: all 1s;




}
.pulseText {
    animation: pulse 10s ease-in-out infinite;
}
.clue:hover {
  background-color: red;
  font-weight: bold;
}

.reduceSpacing {
  color: white;
  letter-spacing: 10px;
  font-size: 20px;

}

.colon {
  margin-top: 100px;
  color: white;
  font-size: 80px;

}
.bottom {
  position: absolute;
  bottom: 0px;
  margin-left: 50%;
  margin-top:
}
#last-paragraph {
  padding-bottom: 30px;
}
.space-bottom {
  margin-bottom: 10px;
}
@keyframes pulse {
	0% {
		  opacity: 0.5;
    filter: brightness(0.5);
	}
	15% {
		  opacity: 0.5;
    filter: brightness(0.5);
	}
	20% {
    opacity: 1;
    filter: brightness(1.6);

	}
	95% {
    opacity: 0.5;
    filter: brightness(0.5);
	}
	100% {
    opacity: 0.5;
    filter: brightness(0.5);
	}
}

/* State when not hovered over */

#myDiv span.Normal {

    display: block;

}

#myDiv span.OnHover {

    display: none;
    font-size: 14px;
    color: red;
    text-decoration: none;
}

/* State when hovered over */

#myDiv:hover span.Normal {

    display: none;

}

#myDiv:hover span.OnHover {

    display: block;

}
.translate-russian {
  font-size: 24px;
  font-family: 'Nanum Gothic Coding', monospace;
  letter-spacing: 15px;
}

.secret-declaration {
  margin-top: 20px;
}
</style>
