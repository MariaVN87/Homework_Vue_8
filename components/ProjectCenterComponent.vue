<template>
    <div class="project__item-wrap">
            <div class="project__item">
                <div class="project__img-wrap">
                <img src="../assets/image_1.jpg" alt="image 1" class="project__item-img">
            </div>
                <div class="project__item-content">
                    <div>
                        <h3 class="project__item-title">Modern Kitchen</h3>
                        <p class="project__item-text">Decor / Artchitecture</p>
                    </div>
                    <div class="project__item-image">
                    <img src="../assets/row_left.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="project__item">
                <div class="project__img-wrap">
                <img src="../assets/image_2.jpg" alt="image 2" class="project__item-img">
                 </div>
                <div class="project__item-content">
                    <div>
                        <h3 class="project__item-title">Modern Kitchen</h3>
                        <p class="project__item-text">Decor / Artchitecture</p>
                    </div>
                    <img src="../assets/row_left.svg" alt="">
                </div>
            </div>
            <div class="project__item">
                <div class="project__img-wrap">
                <img src="../assets/image_3.jpg" alt="image 3" class="project__item-img">
            </div>
                <div class="project__item-content">
                    <div>
                        <h3 class="project__item-title">Modern Kitchen</h3>
                        <p class="project__item-text">Decor / Artchitecture</p>
                    </div>
                    <img src="../assets/row_left.svg" alt="">
                </div>
            </div>
            <div class="project__item">
                <div class="project__img-wrap">
                <img src="../assets/image_4.jpg" alt="image 4" class="project__item-img">
                </div>
                <div class="project__item-content">
                    <div>
                        <h3 class="project__item-title">Modern Kitchen</h3>
                        <p class="project__item-text">Decor / Artchitecture</p>
                    </div>
                    <img src="../assets/row_left.svg" alt="">
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'ProjectCenterComponent',

    data() {
        return {
           
        }

    },

    mounted() {

    },

    methods: {

    },
    computed: {
   
  }
};
</script>
<style scoped>
.project__item-wrap {
    margin-top: 93px;
  display: grid;
  -webkit-column-gap: 100px;
     -moz-column-gap: 100px;
          column-gap: 100px;
  row-gap: 56px;
  grid-template-columns: repeat(2, 550px);
}

.project__item-content {
  margin-top: 24px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.project__item-title {
  color: #292f36;
  font-family: "DM Serif Display";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 0.5px;
}
.project__item-text {
  color: #4d5053;
  font-family: "Jost";
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.22px;
}

</style>

