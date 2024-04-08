import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        articles: [
            {
                id: 0,
                image: require('../assets/blog_image_1.jpg'),
                imgText: "Kitchan Design",
                itemTitle: "Let’s Get Solution For Building Construction Work",
                itemData: "26 December,2022",
                tag: ["Kitchen"]
            },
            {
                id: 1,
                image: require('../assets/blog_image_2.jpg'),
                imgText: "Living Design",
                itemTitle: "Low Cost Latest Invented Interior Designing Ideas.",
                itemData: "22 December,2022",
                tag: ["Kitchen"]
            },
            {
                id: 2,
                image: require('../assets/blog_image_3.jpg'),
                imgText: "Interior Design",
                itemTitle: "Best For Any Office & Business Interior Solution",
                itemData: "25 December,2022",
                tag: ["Kitchen"]
            },
            {
                id: 3,
                image: require('../assets/blog_image_4.svg'),
                imgText: "Kitchan Design",
                itemTitle: "Let’s Get Solution For Building Construction Work",
                itemData: "26 December,2022",
                tag: ["Kitchen"]
            },
            {
                id: 4,
                image: require('../assets/blog_image_5.jpg'),
                imgText: "Living Design",
                itemTitle: "Low Cost Latest Invented Interior Designing Ideas.",
                itemData: "22 December,2022",
                tag: ["Kitchen"]
            },
            {
                id: 5,
                image: require('../assets/blog_image_6.jpg'),
                imgText: "Interior Design",
                itemTitle: "Best For Any Office & Business Interior Solution",
                itemData: "25 December,2022",
                tag: ["Kitchen"]
            },
        ],
        descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus.Aliquam sollicitudin tellumassa, vbel maximus purus posuere in.Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis.Phasellus ut dolor odio.Aenean in the ipsum vel lectus bibendum commodo. <br> <br> In nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis quisnibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis convallis elit, inviverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purusporttitor.',
    },

    getters: {
        firstThreeArticles: state => {
            return state.articles.slice(0, 3)
        },
    },
})
