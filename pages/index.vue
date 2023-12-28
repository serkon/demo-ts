<template>
  <div class="page-index">
    <h1>Index Page</h1>
    <div class="content">content here</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>
<style>
.content{
  border: 1px solid red;
  @apply p-4 bg-dede-400;
}
</style>
