<template>
<div>
    <div id="video-bg">
      <video autoplay muted loop>
          <source src="~/assets/img/qwery.mp4" type="video/mp4"/>
      </video>
      <div class="about_page">
        <h1 class="head">about page</h1>
        <p>dgxdijgslkgjsdlfgj</p>
      </div>
    </div>
</div>
</template>

<script>
export default {
    transitions: {
        name: 'flip'
  }
}
</script>

<style lang="scss" scoped>
.about_page{
  width: 100vw;
  color: #fff;
  position: absolute;
  height: 100%;
  color: #f1f1f1;
  z-index: 100;
  .head{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 40px;
      padding-top: 200px;
  }
}

#video-bg {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: 1;
    background-size: cover;
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
</style>