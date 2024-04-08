<template>
    <div>
        <section class="banner center">
            <div class="banner__intro">
                <h1 class="banner__intro-title">Articles & News</h1>
                <p class="banner__intro-text">Home / Blog</p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'BannerComponent',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>
<style scoped>
.banner {
    background-image: url("../assets/banner_top.jpg");
    height: 356px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
}

.banner__intro {
    text-align: center;
    background: #fff;
    padding: 41px 78px;
    border-top-left-radius: 37px;
    border-top-right-radius: 37px;
}

.banner__intro-title {
    color: #292f36;
    font-family: "DM Serif Display";
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
}

.banner__intro-text {
    color: #4d5053;
    font-family: "Jost";
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
}
</style>