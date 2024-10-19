<template>
  <div class="not-found-page">
    <img src="../assets/404.gif" alt="404 not found" width="800" height="600" />
    <h1 class="not-found-title">页面未找到</h1>
    <p>不妙，页面走失了呢，请检查网址</p>
  </div>
</template>

<script>
export default {
  name: 'NotFoundPage',
  components: {},
}
</script>

<style scoped>
  .not-found-page{
    width: 100%;
    height: 100%;
    font-size: 14px;
    text-align: center;
  }
  .not-found-page img{
    width: 100%;
    height: 100%;
  }
  .not-found-title{
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 700;
  }
  @media (min-width: 1024px) {
    .not-found-page img{
      max-width: 500px;
    }
    .not-found-title{
      font-size: 24px;
    }
  }
</style>
