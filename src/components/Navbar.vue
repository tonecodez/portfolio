<template>
  <div id="navbar">
    <ul>
      <li id="title"> Tony Dinh </li>
        <router-link tag="li" active-class="active" class="links" v-for="routes in links" 
          v-bind:key="routes.id"
          :to="`${routes.page}`">{{routes.text}}
        </router-link> 
    </ul>
  </div>

</template>

<script>

export default {
  name: 'navbar',
  data () {
    return {
      links: [
        {
          id: 0,
          text: 'About',
          page:'/about'
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

<style scoped>

#navbar {
  width: 100%;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 10px 100px;
  overflow: hidden;
}

li {
  color: #000;
}

#title {
  float: left;
  font-size: 28px;
  padding: 14px 16px;
  
}

.links {
  color: #000;
  padding: 14px 16px;
  text-decoration: none;
  float: right;

}


.links:hover,
.links.router-link-exact-active {
  background-color:  #f0ead6;
  cursor: pointer;
}

</style>