<template>
    <button @click="goToPage">Get started</button>   
    
  </template>
  
  <script>
  
  
  export default {
    name: "BtnComponent",
   
    
    mounted() {
      
    },
    methods: {
    goToPage() {
      this.$router.push('/NotFound');
    }
  }
      
    }
  

  </script>
  
  <style scoped>
 button {
   width: 120px;
   height: 50px;
   border: 1px solid black;
   border-radius: 10px;
   background-color: white;
   color: black;
   font-weight: bold;
   cursor: pointer;
 }
  
  </style>