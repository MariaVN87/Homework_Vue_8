<template>
    <div>
        <p class="project-details__text">{{ descriptions }}</p>

    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "ProjectDetailsSlider",

    methods: {
        
    },
    computed: {
        ...mapState(['descriptions'])
    },
};
</script>

<style scoped>
.project-details__text {
    margin-top: 11px;
    padding-left: 300px;
    padding-right: 300px;
    text-align: justify;
    margin-bottom: 100px;
    color: #4D5053;

    font-size: 22px;
    font-style: normal;

    line-height: 150%;
    letter-spacing: 0.22px;
}
</style>