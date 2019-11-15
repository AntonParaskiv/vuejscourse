<template>
  <div>
    <h2>Forms inputs</h2>
    <input type="text" v-model.lazy="name">

    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
    data(){
        return {
            name: 'Initial state',
        }
    },
}
</script>

<style scoped>

</style>
