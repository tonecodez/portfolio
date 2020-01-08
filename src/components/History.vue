<template>
  <div class="history">
    <div class="list" v-for="data in history"
      v-bind:key="data.id"> 
        <a class="header"> <b> {{data.company}} </b> - {{data.position}} </a> 
        <a class="info"> <i> {{data.time}} </i> - {{data.location}} </a>
        <a class="description"> {{data.description}} </a>
    </div>
  </div>
</template>

<script>

import history from "@/data/work_hist.json"

export default {
  name: 'History',

  data () {
    return {
      history: history
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .history {
    color: "black";
    text-align: left;
    margin: 2% 4%;
  }

  .list {
    margin: 2% 10%;
  }

  .header {
    font-size: 20px;
    display: block;
  }
  
  .info {
    display: block;
    font-size: 15px;
  }
  
</style>
