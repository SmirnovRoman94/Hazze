<template>
    <v-container class="blog_list">
        <v-row no-gutters>
            <v-col class="blog" v-for="item in cards" :key="item.id" cols="12" xl="6" lg="6" md="12" sm="12">
                <v-card class="blog-item">
                    <v-img class="blog-item-img" :src="item.url"/>
                    <div class="blog-item-content">
                        <p class="blog-item-date">{{item.date}}</p>
                        <v-card-title>{{item.title}}</v-card-title>
                        <v-card-text>{{item.desc}}</v-card-text>
                        <div class="blog-item-author">
                            <img class="blog-item-author-img" :src="item.urlAuthor">
                            <div class="blog-item-author-content">
                                <p class="blog-item-author-name">{{item.authpor}}</p>
                                <p class="blog-item-author-profi">{{item.profi}}</p>
                            </div>
                        </div> 
                    </div>
                </v-card>
            </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            cards: [
                {
                    id: 1,
                    url: require('~/assets/img/blog/blog-1.jpg'),
                    date: 'August 9, 2019',
                    title: 'Every Single Way You Can Wear Pastel Makeup This Spring',
                    desc: 'Never ever think of giving up. Winners never quit and',
                    urlAuthor: require('~/assets/img/blog/author-1.jpg'),
                    authpor: 'Jeff Rodriguez',
                    profi: 'Designer'
                },
                {
                    id: 2,
                    url: require('~/assets/img/blog/blog-2.jpg'),
                    date: 'August 9, 2019',
                    title: 'Everything Coming to Netflix Canada in May 2019',
                    desc: 'Never ever think of giving up. Winners never quit and',
                    urlAuthor: require('~/assets/img/blog/author-2.jpg'),
                    authpor: 'Aaron Russell',
                    profi: 'Content'
                },
                {
                    id: 3,
                    url: require('~/assets/img/blog/blog-3.jpg'),
                    date: 'August 9, 2019',
                    title: 'Rick Singer duped me out of $6.5 million, student`s mother says',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et sed do eiusmod tempor incididunt ut labore ',
                    urlAuthor: require('~/assets/img/blog/author-1.jpg'),
                    authpor: 'Jeff Rodriguez',
                    profi: 'Designer'
                },
                {
                    id: 4,
                    url: require('~/assets/img/blog/blog-4.jpg'),
                    date: 'August 9, 2019',
                    title: 'The Week in Pictures: April 25 - May 2',
                    desc: 'Never ever think of giving up. Winners never quit and',
                    urlAuthor: require('~/assets/img/blog/author-2.jpg'),
                    authpor: 'Aaron Russell',
                    profi: 'Content'
                },
                {
                    id: 5,
                    url: require('~/assets/img/blog/blog-5.jpg'),
                    date: 'August 9, 2019',
                    title: 'Measles scare at Newark Airport, cruise ship',
                    desc: 'Never ever think of giving up. Winners never quit and',
                    urlAuthor: require('~/assets/img/blog/author-1.jpg'),
                    authpor: 'Jeff Rodriguez',
                    profi: 'Designer'
                },
                {
                    id: 6,
                    url: require('~/assets/img/blog/blog-6.jpg'),
                    date: 'August 9, 2019',
                    title: 'Inside the $100 million upgrade in America’s',
                    desc: 'Never ever think of giving up. Winners never quit and',
                    urlAuthor: require('~/assets/img/blog/author-2.jpg'),
                    authpor: 'Aaron Russell',
                    profi: 'Content'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.theme--light.v-card{
    background: (0,0,0,0);
    color: #fff;
}
.blog-item{
    margin: 0 7% 7% 0;
    display: flex;
    height: 420px;
    &:hover{
        .blog-item-content{
            width: 100%;
        }
        .blog-item-img{
            width: 0;
        }
    }
    .blog-item-img{
        width: 50%;
        transition: 1s ease-out;
    }
    .blog-item-content{
        width: 49%;
        margin-left: 1%;
        padding: 2%;
        transition: 1s ease-out;
        .blog-item-date{
            padding-left: 16px;
            list-style: none;
            display: inline-block;
            color: #e32879;
            font-size: 14px;
            margin-right: 8px;
        }
        .blog-item-author{
            padding-left: 16px;
            display: flex;
            margin-top: 2em;
            .blog-item-author-img{
                height: 53px;
                width: 50px;
                border-radius: 50%;
            }
            .blog-item-author-content{
                margin-left: 2em;
                .blog-item-author-name{
                    color: #ffffff;
                    font-weight: 700;
                    margin-bottom: 4px;
                }
                .blog-item-author-profi{
                    font-size: 12px;
                    color: #e32879;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
            }
        }
    }
}
</style>