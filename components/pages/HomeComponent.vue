<template>
    <div>
    <HeaderComponent />
    <section class="page1">
      <div class="page1__header">
        <h1 class="page1__header-title">Let Your Home Be Unique</h1>
        <p class="page1__text">There are many variations of the passages of lorem Ipsum available, majority.</p>
        <BtnComponent :colorBtn="colorBtn">Get Started</BtnComponent>
      </div>
      <div class="projects__wrap">
        <h2 class="projects__title">Follow Our Projects</h2>
        <p class="page1__text projects__desc">It is a long established fact that a reader will be distracted by the of
          readable
          content of page looking at its layouts points.</p>
          <ProjectCenterComponent />
      </div>
      <section class="counter center">
        <div class="counter__wrap">
            <div class="counter__item">
                <h2 class="counter__item-title">12</h2>
                <p class="counter__item-text">Years Of Experiance</p>
            </div>
            <div class="counter__item">
                <h2 class="counter__item-title">85</h2>
                <p class="counter__item-text">Success Project</p>
            </div>
            <div class="counter__item">
                <h2 class="counter__item-title">15</h2>
                <p class="counter__item-text">Active Project</p>
            </div>
            <div class="counter__item">
                <h2 class="counter__item-title">95</h2>
                <p class="counter__item-text">Happy Customers</p>
            </div>
        </div>
    </section>
      <div class="articles">
        <h2 class="acrticles__title">Articles & News</h2>
        <p class="articles__desc">It is a long established fact that a reader will be distracted by the of readable
          content of a page when looking at its layouts the points of using.</p>
          <ul class="articles__wrap">
          <ArticleNewsComponent v-for="article in firstThreeArticles"
            :article="article"
            :key="article.id" />   
          </ul>
      </div>
    </section>
    <FooterComponent />
</div>
  </template>
  <script>
  //import ProjectComponent from '@/components/UI/ProjectComponent.vue';
  //import ArticlesComponent from "@/components/UI/ArticlesComponent.vue";
  import BtnComponent from "@/components/BtnComponent.vue";
  import HeaderComponent from "@/components/HeaderComponent.vue";
  import FooterComponent from "@/components/FooterComponent.vue";
  import ProjectCenterComponent from "@/components/ProjectCenterComponent.vue";
  import ArticleNewsComponent from "@/components/ArticleNewsComponent.vue";
  import { mapGetters } from "vuex";
  
  export default {
    name: "HomeComponent",
    components: {
      BtnComponent,
      FooterComponent,
      HeaderComponent,
      ArticleNewsComponent,
      ProjectCenterComponent,
    },
    data() {
      return {
        colorBtn: 'black',
      }
    },
    computed:  {
     ...mapGetters (['firstThreeArticles']),

    }
  }

  </script>
  
  <style scoped>
 
  
.page1__header {
      margin: 0 auto 96px;
      max-width: 1200px;
      padding: 206px 52px;
      background-image: url("/src/assets/Header_Photo.jpg");
      background-repeat: no-repeat;
    }
  
.page1__header-title {
      margin-bottom: 18px;
      max-width: 434px;
      font-family: dm, sans-serif;
      font-size: 65px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
    }
  
.page1__text {
      margin-bottom: 21px;
      max-width: 434px;
      font-family: Jost sans-serif;
      font-size: 22px;
      font-weight: 400;
      line-height: 150%;
    }
  
.projects__wrap {
      margin: 0 auto;
      max-width: 1200px;
      text-align: center;
    }
      
.projects__title   {
      margin-bottom: 8px;
      font-size: 50px;
      font-weight: 400;
      line-height: 125%;
    }
  
.projects__desc {
      margin: 0 auto 93px;
      max-width: 737px;
    }
  
    .counter {
  padding-top: 151px;
  padding-bottom: 151px;
  background-color: #f4f0ec;
}
.counter__wrap {
  padding-left: 59px;
  padding-right: 59px;
}
.counter__wrap {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}
.counter__item {
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  row-gap: 16px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}
.counter__item {
  display: inline-block;
  border-right: 1px solid #cda274;
  padding-right: 60px;
}
.counter__item:last-child {
  border-right: none;
}
.counter__item-title {
  color: #cda274;
  font-family: "DM Serif Display";
  font-size: 85px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 1.7px;
}
.counter__item-text {
  color: #4d5053;
  font-family: "Jost";
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.22px;
}
  
.articles {
    margin: 0 auto;
      max-width: 1200px;
      text-align: center;
    }
.articles__title {
    margin-bottom: 8px;
      font-family: dm sans-serif;
      font-size: 50px;
      font-weight: 400;
      line-height: 125%;
      }
  .articles__desc {
        margin: 0 auto 52px;
        max-width: 811px;
        text-align: center;
        font-family: Jost sans-serif;
        font-size: 22px;
        font-weight: 400;
        line-height: 150%;
      }
  .articles__wrap {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 27px;
    }
  

  
  </style>