<template>
    <div>
        <HeaderComponent />
        <BannerComponent />
        <section class="latest-post center">
            <h2 class="latest-post__title">Latest Post</h2>
            <div class="latest-post__wrap">
                <img src="../../assets/latest-post-img.jpg" alt="latest-post-img" class="latest-post__img">
                <div class="latest-post__content">
                    <h3 class="latest-post__content-title">Low Cost Latest Invented Interior Designing Ideas</h3>
                    <p class="latest-post__content-text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                        turpis
                        dignissim maximus.posuere in.Contrary to popular belief.</p>
                    <p class="latest-post__content-text">Lorem Ipsum is not simply random text. It has roots in a piece
                        of
                        classica.</p>
                    <div class="latest-post__content-wrap">
                        <p class="latest-post__content-data">26 December, 2022</p>
                        <img src="../../assets/row_left_blog.svg" alt="row_left_blog">
                    </div>
                </div>
            </div>
        </section>
        <section class="blog center">
            <h2 class="blog__title-left">Articles & News</h2>
            <ul class="articles__wrap">
                <ArticleNewsComponent v-for="article in articles" :article="article" :key="article.id" />
            </ul>
            <div class="count__page">
                <div class="count__page-wrap">
                    <a href="#" class="count__page-number">
                        <p class="count__page-number-text">01</p>
                    </a>
                    <a href="#" class="count__page-number">
                        <p class="count__page-number-text">02</p>
                    </a>
                    <a href="#" class="count__page-number">
                        <p class="count__page-number-text">03</p>
                    </a>
                    <a href="#">
                        <svg class="count__page-svg" xmlns="http://www.w3.org/2000/svg" width="53" height="52"
                            viewBox="0 0 53 52" fill="none">
                            <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                            <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from '../HeaderComponent.vue'
import BannerComponent from '../BannerComponent.vue'
import ArticleNewsComponent from "@/components/ArticleNewsComponent.vue";
import FooterComponent from '../FooterComponent.vue'
import { mapState } from "vuex";


export default {
    name: 'BlogComponent',
    components: {
        ArticleNewsComponent,
        HeaderComponent,
        FooterComponent,
        BannerComponent
    },
    
    computed:  {
     ...mapState (['articles']),

    },

    mounted() {

    },

    methods: {

    },
};
</script>
<style scoped>
.latest-post__title {
    margin-top: 200px;
    margin-bottom: 27px;
    color: #292f36;
    font-family: "DM Serif Display";
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 62.5px */
    letter-spacing: 1px;
}

.latest-post__wrap {
    border: 1px solid #e7e7e7;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    gap: 62px;
    padding: 22px;
    border-radius: 62px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.latest-post__img {
    border-radius: 50px;
}

.latest-post__content {
    width: 489px;
}

.latest-post__content-title {
    margin-bottom: 22px;
    color: #292f36;
    font-family: "DM Serif Display";
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0.5px;
}

.latest-post__content-text {
    margin-bottom: 41px;
    color: #4d5053;
    font-family: "Jost";
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
}

.latest-post__content-wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
}
.latest-post__content-data {
    color: #4d5053;
    font-family: "Jost";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.16px;
    text-transform: capitalize;
}

.count__page {
    margin-top: 51px;
    margin-bottom: 200px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.count__page-wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    gap: 20px;
}

.count__page-number {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    border: 1px #cda274 solid;
    width: 52px;
    height: 52px;
    border-radius: 52px;
}

.count__page-number-text {
    color: #292f36;
    font-family: "Jost";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    text-transform: capitalize;
}

.count__page-number:hover {
    background: #f4f0ec;
    border: none;
    width: 54px;
    height: 54px;
}

.count__page-svg:hover {
    fill: #f4f0ec;
}

.count__page-svg:hover circle {
    stroke: none;
}
.articles__wrap {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 27px;
    }

* {
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
}

.center {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
}


</style>