<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-button type="info">信息按钮</van-button>
   <div v-for="item in list" :key="item.uniquekey">
     <a :href="item.url">
       <div>{{item.title}}</div>
     <img :src="item.thumbnail_pic_s" >
     </a>
   </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      list:''
    }
  },
  mounted() {
    this.query();
  },
  methods: {
    async query() {
      const res = await this.$api.article.articleList({
        key: "3dd9444b88fb819882b0b35d7b00db0b",
      });
      const { error_code, reason, result } = res;
      if (error_code !== 0) return this.$toast.fail(reason);
      this.list=result.data
      console.log(this.list);
      
    },
  },
};
</script>
