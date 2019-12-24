<template>
  <div class="projects">
    <div class="list" v-for="data in projects"
      v-bind:key="data.id"> 
        <a class="link" v-bind:href="data.link">
          {{data.name}}
        </a>
        <a>
           - {{data.description}} 
        </a>
      </div>
  </div>
</template>

<script>

import projects from '@/data/projects.json'

export default {
  name: 'Projects',

  data () {
    return {
      projects: projects
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .projects {
    color: "black";
    text-align: left;
    margin: 10px 40px;
  }

  .link {
    color: green;
    text-decoration: none;
  }

  .list {
    margin: 40px 100px;
  }
  
</style>
