<template lang="pug">
Layout
  // Intro
  section#intro.main.style1.dark.fullscreen(v-in-viewport)
    .content
      header
        h2 Front End Engineer.
      ul.tags
        li Vue.js
        li Tinkerer
        li {{yearsExperience}} years of experience
      footer
        ClientOnly
          a.button.style2.down(href="#one", v-smooth-scroll) More
  // One
  section#one.main.style2.right.dark.fullscreen(v-in-viewport)
    .content.box.style2
      header
        h2 What I Do
      p
        | I am a Senior Front End Engineer at
        |
        a(
          href="https://joyent.com",
          target="_blank",
          rel="noopener noreferrer"
        ) Joyent (A subsidiary of Samsung)
        | .
      p
        | In April, I will begin my position at Joyent as Senior Front End
        | Engineer. I will be joining Joyent's Compute department utilizing
        | Vue.js, Nuxt, and Vuex to enhance Samsung's internal cloud.
    ClientOnly
      a.button.style2.down.anchored(href="#two", v-smooth-scroll) Next
  // Two
  section#two.main.style2.left.dark.fullscreen(v-in-viewport)
    .content.box.style2
      header
        h2 Who I Am
      p
        | I am an experienced and highly adaptable front end engineer eager to
        | push the boundaries of my knowledge of software development
        | technologies and methods. I've demonstrated competency in several front
        | end technologies and I'm particularly well-versed in Vue.js.
      p
        | I have a
        | solid background in Computer Science, having graduated with a B.S. from
        | Texas A&M University; and with {{yearsExperience}}+ years experience in IT consulting and
        | software engineering, I have a strong track record of delivering
        | quality software efficiently. When I'm not poring over well-written
        | documentation you can find me exercising, playing with my 3 cats, or
        | spending time with my wife.
    ClientOnly
      a.button.style2.down.anchored(href="#work", v-smooth-scroll) Next
  // Work
  section#work.main.style3.primary.fullscreen
    .content
      header
        h2 My Work
        p
          | I've gained experience developing in several different front end frameworks.
          | My expertise and preference is with Vue.js.
      // Gallery
      projects
  // Contact
  section#contact.main.style3.secondary(v-in-viewport)
    .content
      header#say-hello
        h2 Say Hello.
        p
          | Let's connect! Send me a message using the form below.

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
