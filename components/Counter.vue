<template>
    <section>
        <div class="counter">
            <div class="counter-left">
                <p class="pre_header">Number Speaks</p>
                <h3 class="counter-left-header">We have a lot of experience</h3>
            </div>
            <div class="counter-right">
                <div class="counter-right-item">
                    <countTo class="counter-right-item-number"
                    :startVal="startVal"
                    :endVal="projects"
                    :separator="count"
                    :duration="7000">
                    </countTo>
                    <div class="counter-right-item-content">
                        <h3 class="counter-right-item-content-header">Successful projects</h3>
                        <p class="counter-right-item-content-text">Since its establishment in 2005, Fashion has been focusing on project management &amp; implementation through cooperation.</p>
                    </div>
                </div>
                <div class="counter-right-item">
                    <countTo class="counter-right-item-number"
                    :startVal="startVal"
                    :endVal="events"
                    :separator="count"
                    :duration="7000">
                    </countTo>
                    <div class="counter-right-item-content">
                        <h3 class="counter-right-item-content-header">Events</h3>
                        <p class="counter-right-item-content-text">Since its establishment in 2005, Fashion has been focusing on project management &amp; implementation through cooperation.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="create">
            <h3 class="create-header">We Create Trends For The World</h3>
            <p class="create-text">Donec faucibus consequat ante. Mauris eget mi sed ex efficitur porta id non quam. Cras aliquam turpis tellus, quis laoreet lacus congue sed. Nullam at est quis urna vestibulum interdum. Praesent auctor leo ut massa ultrices tempor.</p>
        </div>
        <div class="designers">
            <div class="designers-item" v-for="item in designers" :key="item.id">
                <img class="designers-item-img" :src="item.url" :alt="item.alt"/>
                <div class="designers-item-context">
                    <p class="designers-item-context-text">{{item.text}}</p>
                    <p class="designers-item-context-name">{{item.name}}</p>
                    <p class="designers-item-context-profi">{{item.profi}}</p>
                    <div class="designers-item-context-social">
                        <facebook-mdi class="designers-item-context-social-item"></facebook-mdi>
                        <instagram-mdi class="designers-item-context-social-item"></instagram-mdi>
                        <twitter-mdi class="designers-item-context-social-item"></twitter-mdi>
                        <pinterest-mdi class="designers-item-context-social-item"></pinterest-mdi>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import countTo from 'vue-count-to'
export default {
    components: {
        countTo
    },
    data(){
        return{
            startVal: 0,
            projects: 2034,
            events: 1054,
            count: "0",
            designers:[
                {
                    id:1,
                    alt: 'one',
                    url: require('~/assets/img/design/member-1.jpg'),
                    text: 'Quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
                    name: 'Jacob Gomez',
                    profi: 'Designer',
                },
                {
                    id:2,
                    alt: 'two',
                    url: require('~/assets/img/design/member-2.jpg'),
                    text: 'Quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
                    name: 'Jacob Gomez',
                    profi: 'Designer',
                },
                {
                    id:3,
                    alt: 'three',
                    url: require('~/assets/img/design/member-3.jpg'),
                    text: 'Quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
                    name: 'Jacob Gomez',
                    profi: 'Designer',
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.counter{
    display: flex;
    .counter-left{
        width: 49%;
        .pre_header{
            text-transform: uppercase;
            color: #e32879;
            font-weight: 700;
            padding-bottom: 2em;
        }
        .counter-left-header{
            font-size: 60px;
            font-weight: 300;
            padding-bottom: 10px;
            text-align: left;
        }
    }
    .counter-right{
        width: 50%;
        margin-left: 1%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .counter-right-item{
            display: flex;
            .counter-right-item-number{
                width: 20%;
                font-size: 48px;
                color: #e32879;
                font-weight: 700;
                line-height: 50px;
                left: 0;
                top: 0;
            }
            .counter-right-item-content{
                width: 79%;
                margin-left: 1%;
                .counter-right-item-content-header{
                    font-size: 22px;
                    color: #ffffff;
                    font-weight: 700;
                    margin-bottom: 12px
                }
                .counter-right-item-content-text{
                    font-size: 16px;
                    color: #b3b3b3;
                    font-weight: 400;
                    line-height: 26px;
                }
            }
        }
    }
}
.create{
    margin-top: 7em;
    text-align: center;
    .create-header{
        font-size: 45px;
        color: #ffffff;
        font-weight: 300;
        margin-bottom: 20px;
    }
    .create-text{
        font-size: 16px;
        line-height: 26px;
        margin-bottom: 45px;
    }
}

.designers{
    display: flex;
    justify-content: space-around;
    .designers-item{
        position: relative;
        display: flex;
        justify-content: center;
        align-content: center;
        &:hover{
            .designers-item-context{
                opacity: 1;
                transform: scale(1);
            }
        }
    }
    .designers-item-context{
        position: absolute;
        top: 5%;
        width: 90%;
        height: 90%;
        background-color: #191919;
        padding: 20% 5%;
        text-align: center;
        opacity: 0;
        transform: scale(0);
        transition: all .5s ease-out;
        .designers-item-context-text{
            margin-bottom: 32px;
            font-size: 16px;
            color: #b3b3b3;
            line-height: 26px;
            font-weight: 400;
        }
        .designers-item-context-name{
            font-size: 22px;
            color: #ffffff;
            font-weight: 700;
            margin-bottom: 4px;
        }
        .designers-item-context-profi{
            font-size: 12px;
            color: #e32879;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .designers-item-context-social{
            width: 80%;
            margin: 20px auto;
            display: flex;
            justify-content: space-around;
            .designers-item-context-social-item{
                display: inline-block;
                font-size: 16px;
                color: #ffffff;
                width: 45px;
                height: 45px;
                line-height: 45px;
                text-align: center;
                background: #303030;
                border-radius: 50%;
                margin-right: 3px;
                &:hover{
                    background-color: #e32879;
                }

            }
        }
    }
}
</style>