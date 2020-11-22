<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{count}}</h1>
    <button @click="add">click</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data(){
    return {
      count:0
    }
  },
  methods:{
    add(){
      this.count++
    }
  },
  components: {
  }
}
</script>
<style>
h1{
  color:red;
}
</style>
