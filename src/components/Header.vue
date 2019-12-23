<template>
  <div id="header">
    <nav>
      <p> Tony Dinh </p>
      <router-link class="spacing" v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'header',

  data() {
    return {
      links: [
        {
          id: 0,
          text: 'About',
          page:'/'
        },
        {
          id: 1,
          text: 'Projects',
          page:'/projects'
        }
      ]
    }
  }
}
</script>

<style>
    .spacing {
      margin-right: 10px;
    }
</style>