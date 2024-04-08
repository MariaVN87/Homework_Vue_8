<template>
    <div>
        <header class="header center">
            <div class="header__logo">
                <img src="../assets/Logo.svg" alt="logo">
                <p class="logo__text">Interno</p>
            </div>
            <div class="header__menu">
                <router-link to="/home" class="router-link">Home</router-link>
                <router-link to="/project" class="router-link">Project</router-link>
                <router-link to="/blog" class="router-link">Blog</router-link>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',

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
* {
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
}

.header {
    margin-top: 53px;
    margin-bottom: 57px;
    font-family: "DM Serif Display";
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

.header__logo {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 10px;
}

.header__logo img {
    width: 34px;
    height: 34px;
}

.header__logo p {
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
    color: #292f36;
}

.header__menu {
    text-align: center;
    font-family: "Jost";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    gap: 48px;
}
.router-link {
    color: black;
    text-decoration: none; 
    font-size: 22px;
    font-family: "DM Serif Display";
}

.header__link {
    color: #292f36;
}
</style>
