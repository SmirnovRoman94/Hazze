<template lang="pug">
.counter-page
    .counter-about(v-show="!page")
        img(class='counter-img' src='~/assets/img/im1.jpeg')
        .counter-content
            p(class="counter-content-preHeader") about us
            h3(class="counter-content-header") about story
            p(class="counter-content-text") Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.Tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            .counter-content-number 
                .counter-content-number-item(v-for="item in numbersAbout", :key="item.id") {{item.text}}
                    countTo(class="counter-content-numbers" 
                    :startVal="startVal" :endVal="item.number" :separator="count" :duration="7000")
    .counter-index(v-show="page")
        .speak
            p(class="counter-content-preHeader") numbers speaks
            h3(class="counter-content-header") We have a lot of experience
        .speak-content
            .speak-content-item(v-for="item in numbersIndex", :key="item.id")
                .speak-content-item-left
                    countTo(class="speak-content-item-number"
                    :startVal="startVal" :endVal="item.number" :separator="count" :duration="7000")
                .speak-content-item-right
                    h3(class="speak-content-item-header") {{item.title}}
                    p(class="speak-content-item-text") {{item.text}}


                 
</template>

<script>
import countTo from 'vue-count-to'
export default {
    components: {
        countTo
    },
    props: {
        page: {
            type: Boolean
        }
    },
    data(){
        return{
            numbers: [
                {
                    id: 1,
                    number: 8384,
                    text: 'member'
                },
                {
                    id: 2,
                    number: 6880,
                    text: 'partner'
                },
                {
                    id: 3,
                    number: 1546,
                    text: 'branch'
                },
                {
                    id: 4,
                    number: 4677,
                    text: 'designs'
                },
                {
                    id: 5,
                    number: 2034,
                    title: 'Successful projects',
                    text: 'Since its establishment in 2005, Fashion has been focusing on project management & implementation through cooperation.'
                },
                {
                    id: 6,
                    number: 1054,
                    title: 'Events',
                    text: 'Since its establishment in 2005, Fashion has been focusing on project management & implementation through cooperation.'
                }
            ],
            startVal: 0,
            count: "0",
        }
    },
    computed: {
        numbersAbout(){
            return this.numbers.slice(0,4)
        },
        numbersIndex(){
            return this.numbers.slice(4)
        }
    }
}
</script>

<style lang="scss" scoped>
//counter about
.counter-content-preHeader{
            color: #e32879;
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 2px;
        }
.counter-content-header{
            font-size: 60px;
            color: #ffffff;
            font-weight: 300;
            margin-top: 14px;
        }
.counter-about{
    color: #fff;
    display: flex;
    align-items: center;
    .counter-img{
        width: 55%;
    }
    .counter-content{
        width: 43%;
        margin-left: 2%;
        .counter-content-text{
            font-size: 16px;
            font-weight: 400;
            color: #555454;
        }
        .counter-content-number{
            margin-top: 3em;
            display: flex;
            justify-content: space-between;

            .counter-content-number-item{
                display: flex;
                flex-direction: column-reverse;
                color: #555454;
                text-transform: uppercase;
                align-items: center;
                .counter-content-numbers{
                    color: #ffffff;
                    font-weight: 700;
                    margin-bottom: 10px;
                    font-size: 40px;
                }
            }
        }
    }
}
//index counter
.counter-index{
    display: flex;
    padding-top: 40px;
    .speak{
        width: 49%;
    }
    .speak-content{
        width: 50%;
        margin-left: 1%;
        .speak-content-item{
            display: flex;
            padding-bottom: 2em;
            .speak-content-item-left{
                width: 20%;
                font-size: 48px;
                color: #e32879;
                font-weight: 700;
                line-height: 50px;
                left: 0;
                top: 0;
            }
            .speak-content-item-right{
                width: 79%;
                margin-left: 1%;
                .speak-content-item-header{
                    font-size: 22px;
                    color: #ffffff;
                    font-weight: 700;
                    margin-bottom: 12px
                }
                .speak-content-item-text{
                    font-size: 16px;
                    color: #b3b3b3;
                    font-weight: 400;
                    line-height: 26px;
                }
            }
        }
    }
}
</style>