<template>
    <section> 
        <p class="pre_header">Our Portfolio</p>
        <h1 class="portfolio_header">Turn Your Dream Into Reality</h1>
        <div  class="portfolio">
            <div class="portfolio_item" :id="item.selector" v-for="item in images" :key="item.id">
                <img :src="item.url"/>
                <div class="portfolio_item-social">
                    <div class="portfolio_item-social-item">
                        <linkVariant-mdi></linkVariant-mdi>
                    </div>
                    <div class="portfolio_item-social-item">
                        <magnify-mdi @click="changerPop(item)" ></magnify-mdi>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            images: [
                {
                    id: 1,
                    selector: 'one',
                    url: require('~/assets/img/portfolio/gallery-2.jpg')
                },
                {
                    id: 2,
                    selector: 'two',
                    url: require('~/assets/img/portfolio/gallery-5.jpg')
                },
                {
                    id: 3,
                    selector: 'three',
                    url: require('~/assets/img/portfolio/portfolio-1.jpg')
                },
                {
                    id: 4,
                    selector: 'four',
                    url: require('~/assets/img/portfolio/portfolio-2.jpg')
                },
                {
                    id: 5,
                    selector: 'five',
                    url: require('~/assets/img/portfolio/portfolio-3.jpg')
                }
            ]
        }
    },
    methods: {
        changerPop(item){
            this.$emit('itemPop', item)
        }
    }
}
</script>

<style lang="scss" scoped>
.pre_header{
    text-transform: uppercase;
    color: #e32879;
    font-weight: 700;
    padding-bottom: 2em;
    text-align: center;
}
.portfolio_header{
    font-size: 60px;
    font-weight: 300;
    padding-bottom: 10px;
    text-align: center;
}
.portfolio{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
}
.portfolio_item{
    overflow: hidden;
    position: relative;
}
.portfolio_item-social{
    position: absolute;
    top: calc((100% - 66px)/2);
    justify-content: center;
    width: 100%;
    display: flex;
    .portfolio_item-social-item{
        width: 66px;
        height: 66px;
        background-color: #e32897;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        &:first-child{
            transition: opacity, transform, 1s ease;
            opacity: 0;
            transform: translate(-100%);
        }
        &:last-child{
            margin-left: 5px;
            transition: opacity, transform, 1s ease;
            opacity: 0;
            transform: translate(100%);
        }
    }
}

.portfolio_item img{
    width: 100%;
    height: 100%;
    background-position: 0 0;
    transition: 1s;
}
.portfolio_item:hover{
    img{
        transform: scale(1.2);
    }
    .portfolio_item-social-item{
        transition: opacity, transform, 1s ease;
        opacity: 1;
        transform: translate(0px);
    }
}
#three{
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
}
#four{
    grid-column-start: 1;
    grid-column-end: 3;
}
@media screen and(max-width:800px) {
    .portfolio_header{
        font-size: 40px;
    }
}
</style>