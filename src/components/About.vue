<template>
  <div class="about">
      <div id="prof">
        <img src="../img/profile.jpeg" width="400" height="400" alt="Me!">
      </div>
      <div id="bio">
        <h1> Who I Am: </h1>
        <p>
          Hello, my name is Tony Dinh. I graduated from Western Washington University with a 
          Bachelor of Science in Computer Science in December of 2019. I am currently looking 
          for opportunities in the software industry. 
        </p>

        <p> 
          Please refer to my LinkedIn page at this time, where all of my academic and work
          experience is listed. This webpage will be updated intermittently with any relevant
          information pertaining to me.
        </p>

        <p> 
          The main purposes of creating this webpage is to gain experience with using AWS, 
          as well as to keep my skills fresh as I search for employment opportunities.
        </p>

        <p>
          Thank you for taking the time to visit my webpage!
        </p>
      </div>
  </div>
</template>

<script>

export default {
  name: 'About'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .about {
    padding: 5% 10%;
    display: inline-block;
    /* flex-wrap: wrap-reverse; */
  }

  #prof {
    float: left;
    padding-right: 5%;
  }

  #bio {
    text-align: left;
  }

</style>
