<template>
    <div class="project__items">
        <div class="project__item" v-for="project in projects" :key="project.id">
            <img class="project__item-img" :src="project.image" alt="" />
            <div class="project__item-wrap">
                <div class="project__item-wrap-text">
                    <h2 class="project__item-title">{{ project.title }}</h2>
                    <p class="project__item-text">{{ project.text }}</p>
                </div>
                <router-link to="/ProjectDetailsComponent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                        <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectComponentProject',

    data() {
        return {
            projects: [
                {
                    id: 1,
                    image: require('../assets/Image1.png'),
                    title: "Minimal Bedroom",
                    text: "Decor / Artchitecture",
                },
                {
                    id: 2,
                    image: require('../assets/Image2.png'),
                    title: "Minimal Bedroom",
                    text: "Decor / Artchitecture",
                },
                {
                    id: 3,
                    image: require('../assets/Image3.png'),
                    title: "Classic Minimal Bedroom",
                    text: "Decor / Artchitecture",
                },
                {
                    id: 4,
                    image: require('../assets/Image4.png'),
                    title: "Modern Bedroom",
                    text: "Decor / Artchitecture",
                },
                {
                    id: 5,
                    image: require('../assets/Image5.png'),
                    title: "Minimal Bedroom table",
                    text: "Decor / Artchitecture",
                },
                {
                    id: 6,
                    image: require('../assets/Image6.png'),
                    title: "System Table",
                    text: "Decor / Artchitecture",
                },
                {
                    id: 7,
                    image: require('../assets/Image7.png'),
                    title: "Minimal Bedroom",
                    text: "Decor / Artchitecture",
                },
                {
                    id: 8,
                    image: require('../assets/Image8.png'),
                    title: "Minimal Bedroom",
                    text: "Decor / Artchitecture",
                },
            ],
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style scoped>
.project__items {
    margin-top: 61px;
    margin-bottom: 61px;
    column-count: 2;
}

.project__item {
    padding-bottom: 27px;
    display: inline-block;
}

.project__item-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
}
</style>