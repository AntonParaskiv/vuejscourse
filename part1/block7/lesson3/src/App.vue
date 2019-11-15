<template>
  <div>
    <h2>Forms inputs</h2>

    <label>
      <input type="checkbox" value="instagram" v-model="social"> Instagram
    </label>

    <label>
      <input type="checkbox" value="vk" v-model="social"> Vk
    </label>

    <label>
      <input type="checkbox" value="facebook" v-model="social"> Facebook
    </label>

    <hr>
    <ul>
      <li v-for="s in social"> {{ s }}</li>
    </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            social: [ 'vk' ],
        }
    },
}
</script>

<style scoped>
  textarea {
    height: 100px;
    width: 400px;
  }

  p {
    white-space: pre;
  }
</style>
