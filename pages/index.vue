<template>
<div>
    <div id="video-bg">
      <video autoplay muted loop>
          <source src="~/assets/img/qwer.mp4" type="video/mp4"/>
      </video>
      <div class="container">
        <div @scroll="handleScroll" class="home_page">
        <h1 class="head">HOME PAGE</h1>
        <div class="new_fashoin">
          <p class="new_fashoin_item">office fashion</p>
          <h3 class="new_fashoin_header">New Fashion</h3>
          <p class="new_fashoin_content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, corporis illo! Fugit aut velit nobis sit pariatur, nisi tempore nemo a, quidem voluptate ratione impedit quasi earum reprehenderit culpa perferendis.</p>
          <div class="controls">
            <button class="controls_item">Read me</button>
          </div>
        </div>
          <div :class="{'fade' : isFade}" class="box">
            <Serviced/>
          </div>
          <div :class="{'fade' : isFade}" class="boxTwo">
            <Portfolio @itemPop="qw"/>
          </div>
          <div  :class="{'fade' : isFade}" class="box">
            <Counter :page="true"/>
            <Design/>
          </div>
          <Footer/>
        </div>
      </div>
      <div :class="{'popup' : isPop}">
        <div class="popup_content">
          <div class="popup_controls">
            <button @click="closePopup" class="popup_btn">X</button>
          </div>
          <img class="popup_img" :src="itemPop" alt="item"/>
        </div>
      </div>
    </div>
</div>
</template>




<script>
import Splitter from 'split-html-to-chars'
import Serviced from '~/components/Serviced'
import Portfolio from '~/components/Portfolio'
import Design from '~/components/Design'
import Counter from '~/components/Counter'
import Footer from '~/components/system/footer'
export default {
  components: {
    Serviced,
    Portfolio,
    Design,
    Counter,
    Footer
  },
  data(){
    return{
      isFade: false,
      isPop: false,
      itemPop: null
    }
  },
  mounted(){
    let els = this.$el.querySelectorAll(".head");
      [].forEach.call(els, function(el) {
          el.outerHTML = Splitter(el.outerHTML, '<span class="item">$</span>');
    });
    let elser = this.$el.querySelectorAll(".item");
    for (let i = 0; i<elser.length; i++){
      setTimeout(()=>{
        elser[i].classList.add('active')
      }, i * 200)
    }
  },
  methods: {
    handleScroll(){
      let boxOne = this.$el.querySelector('.box')
      let boxTwo = this.$el.querySelector('.boxTwo')
      let toppositionTwo = boxTwo.getBoundingClientRect().top
      let toppositionOne =  boxOne.getBoundingClientRect().top
      if(toppositionOne < 430 || toppositionTwo < 730){
        return this.isFade = true
      }else{
        this.isFade = false
      }
    },
    qw(item){
      this.itemPop = item.url
      this.isPop = true
    },
    closePopup(){
      this.itemPop = null
      this.isPop = false
    }
  }
}
</script>


<style lang="scss">
.popup{
    width:100%;
    height: 2000px;
    background-color: rgba(0,0,0,0.5);
    overflow:hidden;
    position:fixed;
    top:0px;
    .popup_content{
      transition: 1s ease-in-out;
      height: 100%;
      display: flex;
      justify-content: center;
      margin-top: 20%;
      .popup_img{
        width: auto;
        height: 40%;
      }
      .popup_controls{
        margin-top: -40px;
        .popup_btn{
          color: #fff;
          background-color: #e32879;
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
      }
    }
}
.box{
  transition: opacity, transform, 1s ease;
  opacity: 0;
  transform: translate(-100%);
}
.boxTwo{
  transition: opacity, transform, 1s ease;
  opacity: 0;
  transform: translate(100%);
}
.boxTwo.fade, .box.fade{
  transition: opacity, transform, 1s ease;
  opacity: 1;
  transform: translate(0px);
}
.home_page{
  color: #fff;
  width: 100%;
  height: 100%;
  height: auto;
  height: 100vh;
  overflow: auto;
  .head{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 40px;
      padding-top: 200px;
  }
}
::-webkit-scrollbar {
  width: 0;
}
#video-bg {
    animation: fade 2s;
    position: sticky;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: 1;
    background-size: cover;
}
@keyframes fade  {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
#video-bg > video {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%; 
    min-height: 100%;
    width: auto;
    height: auto; 
}

 @supports (object-fit: cover) {
     #video-bg > video {
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         object-fit: cover;
     }
 }
.item{
 opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0s linear 0.3s;
}
.item.active{
  opacity: 1;
  visibility: visible;
  transition-delay: 0s;
}

// new_fashoin

.new_fashoin{
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: left;
  max-width: 450px;
  .new_fashoin_item{
    text-transform: uppercase;
    color: #e32879;
    font-weight: 700;
    padding-bottom: 2em;
  }
  .new_fashoin_header{
    font-size: 40px;
    font-weight: 700;
    padding-bottom: 10px;
  }
  .controls{
    padding-top: 2em;
    .controls_item{
      font-size: 16px;
      color: #ffffff;
      background: #e32879;
      display: inline-block;
      font-weight: 700;
      padding: 12px 30px 10px;
      border: none;
    }
  }
}
</style>