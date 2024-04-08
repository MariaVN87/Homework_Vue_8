<template>
  <div>
        <HeaderComponent></HeaderComponent>
        <div class="">
            <section class="blog-details__intro">
                <img src="../../assets/blog-details-intro.png" alt="photo">
            </section>
        </div>
        <div id="blog-details" class="blog-details center">
            <div class="blog-details__content">
                <div>
                    <article v-for="article in currentArticle" :key="article.id" class="article">
                        <div class="article__content">
                            <h2 class="article__heading">{{ currentArticle[0].firstheading }}</h2>
                            <img class="article__image" :src="article.src" :alt="article.alt">
                            <div class="article__subcontent">
                                <p class="article__date">
                                    {{ article.date }}
                                </p>
                                <div class="breadcrumbs">
                                    <span class="breadcrumbs__list">
                                        <p class="breadcrumbs__item">
                                            <a href="#" class="breadcrumbs__link">
                                                {{ article.firstlink }}
                                            </a>
                                        </p>
                                        <p class="breadcrumbs__item">
                                            <a href="#" class="breadcrumbs__link">
                                                {{ article.secondlink }}
                                            </a>
                                        </p>
                                        <p class="breadcrumbs__item">
                                            <a href="#" class="breadcrumbs__link">
                                                {{ article.thirdlink }}
                                            </a>
                                        </p>
                                    </span>
                                </div>
                            </div>
                            <p class="article__text">{{ article.firstparagraph }}</p>
                            <p class="article__text">{{ article.secondparagraph }}</p>
                        </div>
                        <div class="quotes">
                            <div class="quotes__content">
                                <div class="quotes__marks">
                                    <svg width="74" height="56" viewBox="0 0 74 56" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M58.2516 0.600003C62.6516 0.600003 66.2516 2.06667 69.0516 5C71.7182 7.93334 73.0516 11.8667 73.0516 16.8C73.0516 25.4667 70.1849 33 64.4516 39.4C58.5849 45.8 51.5849 51.0667 43.4516 55.2L41.4516 51.8C44.7849 49.6667 47.9182 46.9333 50.8516 43.6C53.6516 40.2667 55.8516 36.6667 57.4516 32.8L51.8516 28.6C49.5849 27.1333 47.7182 25.1333 46.2516 22.6C44.7849 20.2 44.0516 17.8667 44.0516 15.6C44.0516 11.3333 45.3849 7.73334 48.0516 4.8C50.5849 2 53.9849 0.600002 58.2516 0.600003ZM17.0516 0.599999C21.4516 0.6 25.0516 2.06667 27.8516 5C30.5182 7.93333 31.8516 11.8667 31.8516 16.8C31.8516 25.4667 28.9849 33 23.2516 39.4C17.3849 45.8 10.3849 51.0667 2.25155 55.2L0.251554 51.8C3.58489 49.6667 6.71822 46.9333 9.65155 43.6C12.4516 40.2667 14.6516 36.6667 16.2516 32.8L10.6516 28.6C8.38489 27.1333 6.51822 25.1333 5.05155 22.6C3.58489 20.2 2.85156 17.8667 2.85156 15.6C2.85156 11.3333 4.18489 7.73333 6.85156 4.8C9.38489 2 12.7849 0.599999 17.0516 0.599999Z"
                                            fill="#CDA274" />
                                    </svg>
                                </div>
                                <p class="quotes__text">{{ article.quotetext }}</p>
                            </div>
                        </div>
                        <h2 class="article__heading">{{ article.secondheading }}</h2>
                        <p class="article__text">{{ article.thirdparagraph }}</p>
                        <div class="article__subtext-box">
                            <span class="article__subtext-span">{{ article.firstspan }}</span>
                            <p class="article__subtext">{{ article.firstsubtext }}</p>
                        </div>
                        <div class="article__subtext-box">
                            <span class="article__subtext-span">{{ article.secondspan }}</span>
                            <p class="article__subtext">{{ article.secondsubtext }}</p>
                        </div>
                        <div class="article__subtext-box">
                            <span class="article__subtext-span">{{ article.thirdspan }}</span>
                            <p class="article__subtext">{{ article.thirdsubtext }}</p>
                        </div>
                        <img class="article__image" :src="article.secondsrc" :alt="article.secondalt">
                        <p class="article__text">{{ article.forthparagraph }}</p>
                    </article>
                </div>
                <div>
                    <aside class="sidebar">
                        <div class="sidebar__content">
                            <h3 class="sidebar__heading">{{ sidebarTitle }}</h3>
                            <div class="sidebar__buttons-box">
                                <button v-for="button in buttons" :key="button.id" @click="changeArticle(button.id)"
                                    type="button"
                                    :class="['sidebar__button', button.id === buttonIsActive ? 'sidebar__button_active' : false]">{{
                        button.title }}
                                </button>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>

import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'ProjectBlogDetailsComponent',
  components: {
    HeaderComponent,
    FooterComponent,
  },

  data() {
        return {
            currentArticle: [
                {
                    id: 'kitchen',
                    firstheading: 'Let’s Get Solution for Building Construction Work',
                    src: require('../../assets/blog_kitchen.png'),
                    alt: 'kitchen',
                    date: '26 December,2022',
                    firstlink: 'Interior',
                    secondlink: 'Home',
                    thirdlink: 'Decore',
                    firstparagraph: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour.',
                    secondparagraph: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.', quotetext: 'The details are not the details. They make the design.',
                    secondheading: 'Design sprints are great',
                    thirdparagraph: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    firstspan: '1',
                    firstsubtext: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    secondspan: '2',
                    secondsubtext: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    thirdspan: '3',
                    thirdsubtext: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    secondsrc: require('../../assets/blog_kitchen.png'),
                    secondalt: 'kitchen image',
                    forthparagraph: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                },
            ],
            listOfArticles: [
                {
                    id: 'kitchen',
                    firstheading: 'Let’s Get Solution for Building Construction Work',
                    src: require('../../assets/blog_kitchen.png'),
                    alt: 'kitchen',
                    date: '26 December,2022',
                    firstlink: 'Interior',
                    secondlink: 'Home',
                    thirdlink: 'Decore',
                    firstparagraph: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour.',
                    secondparagraph: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.', quotetext: 'The details are not the details. They make the design.',
                    secondheading: 'Design sprints are great',
                    thirdparagraph: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    firstspan: '1',
                    firstsubtext: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    secondspan: '2',
                    secondsubtext: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    thirdspan: '3',
                    thirdsubtext: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    secondsrc: require('../../assets/blog_kitchen.png'),
                    secondalt: 'kitchen image',
                    forthparagraph: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                },
                {
                    id: "bedroom",
                    firstheading: "A bedroom or bedchamber is a room situated within a residential or accommodation unit characterised by its usage for sleeping",
                    src: require('../../assets/bedroom.jpg'),
                    alt: "bedroom",
                    date: "26 December,2022",
                    firstlink: "Interior",
                    secondlink: "Home",
                    thirdlink: "Bedroom",
                    firstparagraph: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
                    secondparagraph: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.", quotetext: "The details are not the details. They make the design.",
                    secondheading: "Design sprints are great",
                    thirdparagraph: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    firstspan: "1",
                    firstsubtext: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    secondspan: "2",
                    secondsubtext: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    thirdspan: "3",
                    thirdsubtext: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    secondsrc: require('../../assets/bedroom.jpg'),
                    secondalt: "bedroom image",
                    forthparagraph: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
                },
                {
                    id: "building",
                    firstheading: "A building is 'a structure that has a roof and walls and stands more or less permanently in one place",
                    src: require('../../assets/blog_building.jpg'),
                    alt: "building",
                    date: "26 December,2022",
                    firstlink: "Interior",
                    secondlink: "Home",
                    thirdlink: "Building",
                    firstparagraph: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
                    secondparagraph: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.", quotetext: "The details are not the details. They make the design.",
                    secondheading: "Design sprints are great",
                    thirdparagraph: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    firstspan: "1",
                    firstsubtext: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    secondspan: "2",
                    secondsubtext: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    thirdspan: "3",
                    thirdsubtext: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    secondsrc: require('../../assets/blog_building.jpg'),
                    secondalt: "building image",
                    forthparagraph: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
                },
                {
                    id: "architecture",
                    firstheading: "Architecture is the art and technique of designing and building, as distinguished from the skills associated with construction",
                    src: require('../../assets/blog_architecture.jpeg'),
                    alt: "architecture",
                    date: "26 December,2022",
                    firstlink: "Interior",
                    secondlink: "Home",
                    thirdlink: "Architecture",
                    firstparagraph: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
                    secondparagraph: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.", quotetext: "The details are not the details. They make the design.",
                    secondheading: "Design sprints are great",
                    thirdparagraph: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    firstspan: "1",
                    firstsubtext: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    secondspan: "2",
                    secondsubtext: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    thirdspan: "3",
                    thirdsubtext: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    secondsrc: require('../../assets/blog_architecture.jpeg'),
                    secondalt: "architecture image",
                    forthparagraph: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
                },
                {
                    id: "kitchen-planning",
                    firstheading: "A kitchen is a room or part of a room used for cooking and food preparation in a dwelling or in a commercial establishment",
                    src: require('../../assets/kitchen_planning.jpg'),
                    alt: "kitchen-planning",
                    date: "26 December,2022",
                    firstlink: "Interior",
                    secondlink: "Home",
                    thirdlink: "Kitchen planning",
                    firstparagraph: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
                    secondparagraph: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.", quotetext: "The details are not the details. They make the design.",
                    secondheading: "Design sprints are great",
                    thirdparagraph: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    firstspan: "1",
                    firstsubtext: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    secondspan: "2",
                    secondsubtext: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    thirdspan: "3",
                    thirdsubtext: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    secondsrc: require('../../assets/kitchen_planning.jpg'),
                    secondalt: "kitchen-planning image",
                    forthparagraph: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
                },

            ],
            sidebarTitle: "Tags",
            buttons: [
                { id: "kitchen", title: "Kitchen" },
                { id: "bedroom", title: "Bedroom" },
                { id: "building", title: "Building" },
                { id: "architecture", title: "Architecture" },
                { id: "kitchen-planning", title: "Kitchen Planning" }
            ],
            currentButton: [{ id: "kitchen", title: "Kitchen" }],
            buttonIsActive: 'kitchen',
        };
    },
    methods: {
        changeArticle(id) {
            const buttonId = id;
            this.listOfArticles.forEach((article) => {
                if (buttonId === article.id) {
                    this.currentArticle = [];
                    this.buttonIsActive = id;
                    return this.currentArticle.push(article);
                }
            });
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
}

.top-banner {
    margin-bottom: 50px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    min-height: 351px;
    max-width: 500px;
}

.blog-details__content {
    margin-top: 96px;
    margin-bottom: 134px;
    margin-left: 120px;
    margin-right: 120px;
    margin-inline: auto;
    max-width: var(--max-width);
    display: flex;
    justify-content: end;
}

.article__heading {
    color: #292F36;
    font-family: 'DM Serif Display', sans-serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: 1px;
    margin: 0;
    margin-bottom: 21px;
}

.article__image {
    width: 799px;
    height: 539px;
    border-radius: 50px;

}

.article__subcontent {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    margin-bottom: 48px;

}

.article__date {
    color: #4D5053;
    font-family: 'Jost', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.16px;
    text-transform: capitalize;
    margin: 0;
}

.article__text {
    color: #4D5053;
    font-family: 'Jost', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.22px;
    margin: 0;
    margin-bottom: 35px;

    &:nth-child(3) {
        margin-bottom: 24px;
    }
}

.article__subtext-box {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 14px;
    margin-bottom: 32px;

    &:nth-child(3) {
        margin-bottom: 44px;
    }
}

.article__subtext-span {
    color: #CDA274;
    font-family: 'DM Serif Display', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25;
    letter-spacing: 0.4px;
    margin: 0;
}

.breadcrumbs__list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0;
}

.breadcrumbs__item {
    &:not(:last-child)::after {
        content: "/";
        margin-left: 8px;
        margin-right: 8px;
    }
}

.breadcrumbs__link {
    color: #4D5053;
    font-family: 'Jost', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.16px;
    text-transform: capitalize;
    margin: 0;

}

.quotes {
    margin-bottom: 27px;

    .quotes__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 53px 200px;
        border-radius: 50px;
        background: #F4F0EC;
    }

    .quotes__marks {
        color: #CDA274;
        text-align: center;
        font-family: 'DM Serif Display', sans-serif;
        font-size: 25px;
        font-style: italic;
        font-weight: 400;
        line-height: 1.25;
        letter-spacing: 0.5px;
        margin: 0;
    }
}

.sidebar {
    .sidebar__content {
        display: flex;
        flex-direction: column;

        justify-content: flex-start;
        align-items: flex-start;
        gap: 24px;

    }

    .sidebar__heading {
        color: #292F36;
        font-family: 'DM Serif Display', sans-serif;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 1.25;
        letter-spacing: 0.5px;
        margin: 0;
    }

    .sidebar__buttons-box {
        display: flex;
        justify-content: flex-start;
        align-content: flex-start;
        flex-wrap: wrap;
        gap: 10px;
    }

    button {
        color: #292F36;
        text-align: center;
        font-family: Jost;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 0.36px;
        border: none;
        border-radius: 10px;
        background-color: #F4F0EC;
        padding: 9px 30px;

    }
}
</style>
