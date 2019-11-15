<template>
  <div>
    <h2>Forms inputs</h2>

    <select v-model="social">
      <option
        v-for="s in socialsList"
      >{{ s }}</option>
    </select>

    <hr>
    <p>{{ social }}</p>
  </div>
</template>

<script>
export default {
    data(){
        return {
            defaultSocial: 'instagram',
            social: 'instagram',
            socialsList: ['instagram', 'vk', 'facebook'],
        }
    },
}
</script>

<style scoped>

</style>
