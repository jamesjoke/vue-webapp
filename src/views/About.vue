<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-button type="info">信息按钮</van-button>
  </div>
</template>

<script>
export default {
  mounted() {
    // console.log(this.$utils.getDate());
    // console.log(this.$regex);
    this.query();
  },
  methods: {
    async query() {
      const res = await this.$api.article.articleList({
        key: "3dd9444b88fb819882b0b35d7b00db0b",
      });
      const { error_code, reason, result } = res;
      if (error_code !== 0) return this.$toast.fail(reason);
      console.log(result);
    },
  },
};
</script>
