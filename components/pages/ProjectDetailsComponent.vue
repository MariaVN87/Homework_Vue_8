<template>
  <div>
        <HeaderComponent />
        <div class="top-banner">
            <section class="blog-details__intro">
                <img src="../../assets/Banner3.jpg" alt="photo">
            </section>
            <div class="container">
                <h2 class="project-details__header">Minimal Look Bedrooms</h2>
                <ProjectDetailsContent />

            </div>
        </div>
        <ProjectDetailsSlider />
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import ProjectDetailsContent from "@/components/ProjectDetailsContent.vue";
import ProjectDetailsSlider from "@/components/ProjectDetailsSlider.vue";

export default {
  name: 'ProjectDetailsComponent',
  components: {
    FooterComponent,
    HeaderComponent,
    ProjectDetailsContent,
    ProjectDetailsSlider,
      
  },

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
.container {
    margin-top: 200px;
    margin-bottom: 200px;
}

.project-details__header {
    text-align: center;
    color: #292F36;

    font-size: 50px;
    font-style: normal;

    line-height: 125%;
    letter-spacing: 1px;
}
</style>