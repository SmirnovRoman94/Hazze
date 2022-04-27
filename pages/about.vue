<template>
<div>
    <div id="video-bg">
      <video autoplay muted loop>
          <source src="~/assets/img/qwery.mp4" type="video/mp4"/>
      </video>
      <div class="container">
          <div class="about_page">
              <div class="about_counter">
                    <Counter/>
                </div>
                <div class="about_blog">
                    <BlogList/>
                </div>
                <Footer/>
          </div>
      </div>
    </div>
</div>
</template>

<script>
import Counter from '~/components/Counter'
import BlogList from '~/components/BlogList'
import Footer from '~/components/system/footer'
export default {
    transitions: {
        name: 'flip'
  },
  components: {
      Counter,
      BlogList,
      Footer
  }
}
</script>

<style lang="scss" scoped>
.about_page{
  color: #fff;
  width: 100%;
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
 .about_counter{
     margin-top: 15%;
 }
 .about_blog{
     margin-top: 5%;
 }
</style>