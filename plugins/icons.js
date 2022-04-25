import Vue from "vue";


import LinkVariant from 'vue-material-design-icons/LinkVariant.vue'
import Magnify from 'vue-material-design-icons/Magnify.vue'
import Facebook from 'vue-material-design-icons/Facebook.vue'
import Instagram from 'vue-material-design-icons/Instagram.vue'
import Twitter from 'vue-material-design-icons/Twitter.vue'
import Pinterest from 'vue-material-design-icons/Pinterest.vue'





export default function materialIcons(){
    Vue.component('LinkVariantMdi', LinkVariant),
    Vue.component('MagnifyMdi', Magnify),
    Vue.component('FacebookMdi', Facebook),
    Vue.component('InstagramMdi', Instagram),
    Vue.component('TwitterMdi', Twitter),
    Vue.component('PinterestMdi', Pinterest)
}