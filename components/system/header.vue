<template>
    <div class="containerr">
        <h1 class="logo">HAZZE</h1>
        <ul class="links">
            <li class="list_item" v-for="item in links" :key="item.id">
                <nuxt-link :to="item.url">{{item.title}}</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            links: [
                { title: 'Home', url: '/', id: 1 },
                { title: 'About', url: '/about', id: 2 }
            ]
        }
  }
}
</script>

<style lang="scss" scoped>
.containerr{
    position: fixed;
    z-index: 100;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: 2em ;
    background-color: rgba(61, 61, 61, 0);
    color: antiquewhite;
    .links{
        display: flex;
        width: 20%;
        justify-content: space-around;
        .item{
        }
    }
}
a{
                text-decoration: none;
                color: antiquewhite;
                font-size: 20px;
                font-weight: 400;
                padding: 10%;
                border: 1px solid #fff;
                &:hover{
                    color: #e32879;
                    border: 1px solid rgb(185, 43, 43);
                }
            }
@media screen and(max-width: 800px) {
    .containerr .links{
        width: 60%;
    }
}
</style>