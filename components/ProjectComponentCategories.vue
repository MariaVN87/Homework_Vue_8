<template>
    <div class="project__categories">
        <div class="project__categories-wrap">
            <div :class="{ active: categories.activCategories }" class="project__categories-button"
                v-for="categories in categoriesList" :key="categories.id" @click="isActive(categories)">
                {{ categories.nameCategories }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectPageCategories",

    data() {
        return {
            categoriesList: [
                {
                    id: 1,
                    nameCategories: "Bathroom",
                    activCategories: false,
                },
                {
                    id: 2,
                    nameCategories: "Bedroom",
                    activCategories: true,
                },
                {
                    id: 3,
                    nameCategories: "Kitchen",
                    activCategories: false,
                },
                {
                    id: 4,
                    nameCategories: "Living Area",
                    activCategories: false,
                },
            ],
        };
    },

    methods: {
        isActive(data) {
            this.categoriesList.forEach((element) => {
                element.activCategories = false;
            });
            this.categoriesList[data.id - 1].activCategories = true;
            this.$emit("activCategories", data);
            return this.categoriesList[data.id - 1].activCategories;
        },
    },
};
</script>

<style scoped>
.project__categories {
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.project__categories-wrap {
    border-radius: 18px;
    width: 880px;
    border: 1px solid #cda274;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 63px;
}

.project__categories-button {
    cursor: pointer;
    padding: 26px 66px;
    margin-left: -66px;
    margin-right: -66px;
}

.active {
    color: #fff;
    border-radius: 18px;
    background: #cda274;
}
</style>