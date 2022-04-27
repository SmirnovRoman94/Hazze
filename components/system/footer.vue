<template lang="pug">
    section(class="containerr")
        .adress
            h3(class="adress-header") Hazze
            .footer-content
                p(class="footer-text") Address: 60-49 Road 11378 New-York
                p(class="footer-text") Phone: +65 11.188.888
                p(class="footer-text") Email: hello.colorlib@gmail.com
                .adress-social
                    <facebook-mdi class="adress-social-item"></facebook-mdi>
                    <instagram-mdi class="adress-social-item"></instagram-mdi>
                    <twitter-mdi class="adress-social-item"></twitter-mdi>
                    <pinterest-mdi class="adress-social-item"></pinterest-mdi>
        .links
            .footer-header
                h3(class="footer-header-item") Useful Links
            .footer-content
                p(class="footer-text") About us
                p(class="footer-text") Model
                p(class="footer-text") Contact
                p(class="footer-text") Serivius
        .join
            .footer-header
                h3(class="footer-header-item") Join The Newsletter
            .footer-content
                p(class="footer-text") Get E-mail updates about our latest shop and special offers.
                input(class="footer-input" type="text" placeholder="Enter your mail")
                button(class="footer-btn") Subscribe
        .insta
            .footer-content
                .insta-images
                    img(v-for="(item, index) in insta" :key="index" :src="item.url" class="insta-images-item")

</template>

<script>
export default {
    data(){
        return{
            insta:[
                {
                    url: require('~/assets/img/insta/instagram-1.jpg')
                },
                {
                    url: require('~/assets/img/insta/instagram-2.jpg')
                },
                {
                    url: require('~/assets/img/insta/instagram-3.jpg')
                },
                {
                    url: require('~/assets/img/insta/instagram-4.jpg')
                },
                {
                    url: require('~/assets/img/insta/instagram-5.jpg')
                },
                {
                    url: require('~/assets/img/insta/instagram-6.jpg')
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.containerr{
    position: relative;
    z-index: 100;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2em 0;
    background-color: rgba(61, 61, 61, 0);
    color: antiquewhite;
    .footer-content{
        margin-top: 2em;
    }
    .footer-header{
        height: 56px;
        display: flex;
        align-items: flex-end;
        .footer-header-item{
            font-size: 20px;
            color: #ffffff;
            font-weight: 700;
        }  
    }
    .footer-text{
        line-height: 26px;
    }
    .adress{
        width: 22%;
        .adress-header{
            font-size: 40px;
            font-weight: 700;
            &::after{
                content: ".";
                color: #e32879;
                
            }
        }
        .adress-social{
            margin-top: 1em;
            width: 100%;
            display: flex;
            justify-content: space-around;
            .adress-social-item:hover{
                color: #e32879;
            }
        }
    }
    .links{
        width: 15%;
        margin-left: 2%;
    }
    .join{
        width: 22%;
        margin-left: 2%;
        .footer-input{
            font-size: 14px;
            height: 46px;
            color: #ffffff;
            border: 1px solid #ffffff;
            padding-left: 10px;
            background-color: rgba(61, 61, 61, 0);
            width: 100%;
            margin: 10px 0;
            &::placeholder{
                color: #fff;
                font-style: italic;
            }
            &:hover{
                border-color: #e32879;
            }
        }
        .footer-btn{
            font-size: 16px;
            color: #ffffff;
            font-weight: 700;
            display: block;
            background: #e32879;
            border: none;
            padding: 12px 0;
            width: 100%;
            &:hover{
                background-color: #fff;
                color: #e32879;
            }
        }
    }
    .insta{
        width: 29%;
        margin-left: 2%;
        .insta-images{
            margin-top: calc(56px + 2em);
            .insta-images-item{
                margin: 1% 1% 0 0;
            }
        }
    }
}
</style>