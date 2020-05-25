<template>
  <div>
    Details {{title}} 
    <br/>
    <div>xxx</div>
    <p>{{author}}</p>
    <p>{{description}}</p>
    <p>rank {{rank}}</p>
    <p>Weeks ob list {{weeks}}</p>
    <img :src="image" alt="" >
    
    
  </div>
</template>

<script>

export default {
  name: "BestDetils",
  data() {
      return {
          title: this.$route.query.title,
          author: this.$route.query.author,
          image: this.$route.query.image,
          description: this.$route.query.description,
          rank: this.$route.query.rank,
          weeks: this.$route.query.weeks
      }
  }
};
</script>
