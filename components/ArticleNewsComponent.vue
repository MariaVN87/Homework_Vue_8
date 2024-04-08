<template>
    <div class="blog__items">
        <div class="blog__item">
            <div class="blog__item-image" v-if="article && article.image">
                <img :src="article.image" :alt="article.image">
                <p class="blog__img-text" v-if="article && article.imgText">{{ article.imgText }}</p>
            </div>
            <h2 class="blog__item-title" v-if="article && article.itemTitle">{{ article.itemTitle }}</h2>
            <div class="blog__wrap-text">
                <p class="blog__item-text" v-if="article && article.itemData">{{ article.itemData }}</p>
                <router-link to="/BlogDetailsComponent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
                    <circle cx="26.5" cy="26.267" r="26" fill="#F4F0EC"/>
                    <path d="M24.271 32.9525L30.2139 26.2668L24.271 19.5811" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>  
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ArticleNewsComponent',
    props: ['article'],

    data() {
        return {
            
        }

    },

    mounted() {

    },

    methods: {

    },
    computed: {
    image() {
      return this.article.image;
    },
    itemTitle() {
      return this.article.itemTitle;
    },
    itemData() {
      return this.article.itemData;
    },
    imgText() {
        return this.article.imgText;
    }
  }
}

</script>
<style scoped>
.blog__items {
  display: flex;
justify-content: space-between;
align-items: center;
}

.blog__item {
    border: 1px solid #e7e7e7;
    border-radius: 62px;
    padding: 21px;
}

.blog__item-select {
    background: #f4f0ec;
}

.blog__item-image {
    border-radius: 45px 45px 0 0;
}

.blog__item-image img {
    border-top-left-radius: 62px;
    border-top-right-radius: 62px;
    margin-bottom: 21px;
}

.blog__item-image p {
    position: absolute;
    top: 228px;
    left: 20px;
    border-radius: 8px 8px 8px 0px;
    background: #fff;
    padding: 4px 10px 8px 11px;
    color: #4d5053;
    font-family: "Jost";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.16px;
    text-transform: capitalize;
}

.blog__item-title {
    font-family: dm;
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
}

.blog__wrap-text {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.blog__item-text {
    color: #4d5053;
    font-family: "Jost";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.16px;
    text-transform: capitalize;
}
</style>