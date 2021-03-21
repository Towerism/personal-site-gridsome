<template lang="pug">
Layout
  // Intro
  section#intro.main.style1.dark.fullscreen(v-in-viewport)
    .content
      header
        h2 Web Developer.
      ul.tags
        li Vue.js
        li Front End Engineer
        li Lifelong Learner
      footer
        ClientOnly
          a.button.style2.down(href="#one", v-smooth-scroll) More
  // One
  section#one.main.style2.right.dark.fullscreen(v-in-viewport)
    .content.box.style2
      header
        h2 What I Do
      p
        | I am a Senior Web Developer at
        |
        a(
          href="https://pentair.com",
          target="_blank",
          rel="noopener noreferrer"
        ) Pentair
        | .
      p
        ul
          li Unified the user experience by refactoring several features to utilize a few highly re-usable Angular components.
          li Enhanced the user experience by using mobile-first HTML/CSS development techniques
          li Squashed bugs in Angular, Sass, and Typescript
          li Elevated our app's performance so that its usage remained smooth even while handling thousands of sales leads.
          li Improved the application's IP Camera streaming technology to eliminate our application's reliance on Adobe Flash which would lose major browser support entirely at the end of 2020
          li Worked remotely and managed own work schedule
    ClientOnly
      a.button.style2.down.anchored(href="#two", v-smooth-scroll) Next
  // Two
  section#two.main.style2.left.dark.fullscreen(v-in-viewport)
    .content.box.style2
      header
        h2 Who I Am
      p
        | Martin Fracker is an experienced and highly adaptable frontend engineer
        | eager to push the boundaries of his knowledge of software development
        | technologies and methods. He has demonstrated competency in several
        | front-end technologies and is particularly well-versed in Vue.js. He
        | has a solid background in Computer Science, having graduated with a
        | B.S. from Texas A&M University; and with 5+ years experience in IT
        | consulting and software engineering, he has a strong track record of
        | delivering quality software efficiently. When he isn't poring over
        | well-written documentation Martin can be found exercising, playing with
        | his 3 cats, or spending time with his wife.
    ClientOnly
      a.button.style2.down.anchored(href="#work", v-smooth-scroll) Next
  // Work
  section#work.main.style3.primary.fullscreen
    .content
      header
        h2 My Work
        p
          | My ability to learn new things and get up to speed quickly is
          | demonstrated by the diversity of technologies used in the various
          | projects I have been a part of.
      // Gallery
      projects
  // Contact
  section#contact.main.style3.secondary(v-in-viewport)
    .content
      header#say-hello
        h2 Say Hello.
        p
          | We, as humans, are stronger when we put our minds together; so
          | let's connect!

      .box
        contact-me
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import ContactMe from "~/components/ContactMe";
import Projects from "~/components/Projects";
export default {
  components: {
    ContactMe,
    Projects
  },
  data() {
    return {
      areImagesHidden: false
    };
  },
  computed: {
    galleryArticleClass() {
      return {
        hidden: this.areImagesHidden
      };
    }
  },
  methods: {
    hideImages() {
      this.areImagesHidden = true;
    }
  }
};
</script>
