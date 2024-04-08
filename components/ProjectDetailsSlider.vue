<template>
    <div class="project-details">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../assets/PhotoSlider1.png" class="d-block w-100" alt="photo1">
                </div>
                <div class="carousel-item">
                    <img src="../assets/PhotoSlider2.jpg" class="d-block w-100" alt="photo2">
                </div>
                <div class="carousel-item">
                    <img src="../assets/PhotoSlider3.jpg" class="d-block w-100" alt="photo3">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>

<script>


export default {
    name: "ProjectDetailsSlider",

    data() {
        return {};
    },

    mounted() {

    },

    methods: {

    },
    computed: {

    },
};
</script>

<style scoped>
.project-details {
    text-align: center;
}

.slide img {
    border-radius: 70px;
}

.carousel {
    width: 80%;
    margin: 0 auto;
}
</style>