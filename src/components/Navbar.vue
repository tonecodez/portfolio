<template>
  <div id="navbar">
    <ul>
      <li id="title"> Tony Dinh </li>
        <router-link tag="li" active-class="active" class="links" v-for="routes in links" 
          v-bind:key="routes.id"
          :to="`${routes.page}`">
            {{routes.text}}
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
          text: 'Work History',
          page:'/history'
        },
        {
          id: 2,
          text: 'Projects',
          page:'/projects'
        }
      ]
    }
  }
}
</script>

<style scoped>

ul {
  list-style-type: none;
  padding: 10px;
  margin: 2% 10%;
  overflow: hidden;
}

li {
  color: #000;
}

#title {
  float: left;
  font-size: 30px;
  /* padding: 1%; */
}

.links {
  color: #000;
  padding: 1% 2%;
  text-decoration: none;
  float: right;
}

.links:hover {
  background-color: #f7f4e9;
  cursor: pointer;
  -o-transition:.6s;
  -ms-transition:.6s;
  -moz-transition:.6s;
  -webkit-transition:.6s;
  transition:.6s;
}
ul .links.router-link-exact-active {
  background-color: #f7f4e9;
  cursor: pointer;
}

</style>