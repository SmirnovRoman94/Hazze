<template>
<section>
    <div class="container">
        <div class="header">
            <p class="header_preitem">our services</p>
            <h3 class="header_item">Best Services Save The World</h3>
        </div>
        <div class="services">
            <div class="service"  v-for="item in services" :key="item.id">
                <div :class="`service_head_item${item.id}`">
                    <img class="service_img" :src="item.url" />
                    <h2 class="service_header">{{item.header}}</h2>
                </div>
                <p class="service_descr">{{item.descr}}</p>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    data(){
        return{
            services:[
                {
                    url: require('~/assets/img/services/service-1.png'),
                    id: 1,
                    aos: 'fade-left',
                    header: 'Modern design',
                    descr:  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi et eos eius, nihil consectetur, incidunt natus a repudiandae deleniti laborum quas, dolorem illo voluptates? Fugit at praesentium aspernatur perspiciatis.'
                },
                {
                    url: require('~/assets/img/services/service-2.png'),
                    id: 2,
                    header: 'Content',
                    aos: 'fade-right',
                    descr:  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi et eos eius, nihil consectetur, incidunt natus a repudiandae deleniti laborum quas, dolorem illo voluptates? Fugit at praesentium aspernatur perspiciatis.'
                },
                {
                    url: require('~/assets/img/services/service-3.png'),
                    id: 3,
                    header: 'Make up',
                    aos: 'fade-left',
                    descr:  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi et eos eius, nihil consectetur, incidunt natus a repudiandae deleniti laborum quas, dolorem illo voluptates? Fugit at praesentium aspernatur perspiciatis.'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.service_head .item2{
    order: 1;
}
.header{
    margin-top: 10%;
    text-align: center;
    .header_preitem{
        text-transform: uppercase;
        color: #e32879;
        font-weight: 700;
        padding-bottom: 2em;
    }
    .header_item{
        font-size: 60px;
        font-weight: 300;
        padding-bottom: 10px;
    }
}

.services{
    width: 70%;
    margin: auto;
    padding-top: 3em;
    .service{
        padding-bottom: 2em;
        margin: 0 15px;
        display: flex;
        align-items: center;
        position: relative;
        .service_head{
            width: 30%;
        }
        .service_head_item1, .service_head_item2, .service_head_item3{
            width: 30%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }
        .service_head_item2{
            order: 1;

        }
        .service_header{
            padding-bottom: 1em;
            font-size: 20px;
            font-weight: 700;
            text-align: center;
        }
        .service_descr{
            width: 70%;
            text-align: justify;
            padding-bottom: 1em;
        }
    }
}
.service::after{
            display: block;
            position: absolute;
            left: 0;
            top: 80%; 
            width: 0;
            height: 2px; 
            background-color: #e32879; 
            content: "";
            transition: width 0.3s ease-out; 
        }
        .service:hover::after{
            width: 100%;
        }
@media screen and(max-width:800px) {
    .services{
        width: 95%;
    }
    .header .header_item{
        font-size: 40px;
    }
}
</style>