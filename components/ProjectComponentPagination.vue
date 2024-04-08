<template>
    <div>
        <section class="project_center">
            <div class="project__count-page">
                <div class="project__count-page-wrap">
                    <a href="#" class="project__count-page-number">
                        <p class="project__count-page-number-text">01</p>
                    </a>
                    <a href="#" class="project__count-page-number">
                        <p class="project__count-page-number-text">02</p>
                    </a>
                    <a href="#" class="project__count-page-number">
                        <p class="project__count-page-number-text">03</p>
                    </a>
                    <a href="#">
                        <svg class="project__count-page-svg" xmlns="http://www.w3.org/2000/svg" width="53" height="52"
                            viewBox="0 0 53 52" fill="none">
                            <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                            <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'ProjectComponentPagination',

    data() {
        return {
        }
    },
}


</script>
<style scoped>
.project_center {
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.project_count-page {
    margin-top: 51px;
    margin-bottom: 200px;
    display: flex;
    justify-content: center;
}

.project__count-page-wrap {
    display: flex;
    gap: 20px;
}

.project__count-page-number {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    border: 1px #cda274 solid;
    width: 52px;
    height: 52px;
    border-radius: 52px;
}

.project__count-page-number-text {
    color: #292f36;
    font-size: 16px;
    font-style: normal;
    line-height: 150%;
    text-transform: capitalize;
}

.hover {
    background: #f4f0ec;
    border: none;
    width: 54px;
    height: 54px;
}

.project__count-page-svg {
    fill: #f4f0ec;
}
</style>