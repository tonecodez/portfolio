<template>
  <div id="contact">
    <ul class="contact">
      <li> {{"dinhtony24@gmail.com"}} </li>
      <li> 
        <a href="http://www.linkedin.com/in/dinhtony">  
          <img src="../img/linkedIn.png" width="40" height="40" alt="Me!">
        </a>
        <a href="https://github.com/tonecodez">  
          <img src="../img/github.png" width="40" height="40" alt="Me!">
        </a>
      </li>
      
    </ul>
  </div>
</template>

<script>

export default {
  name: 'contact'
}
</script>

<style>

  .contact { 
    display: inline;
    list-style-type: none;
  }
  li {
    margin-bottom: 1%;
  }
  li a {
    margin: 1%;
  }
</style>