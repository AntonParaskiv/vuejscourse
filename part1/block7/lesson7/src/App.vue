<template>
  <div>
    <h2>Forms inputs</h2>

    <app-onoff v-model="switched"></app-onoff>

    <div>
      <h3 v-if="switched">Component is enabled</h3>
      <h3 v-else>Component is disabled</h3>
    </div>

  </div>
</template>

<script>
  import Onoff from "./Onoff";

    export default {
        data(){
            return {
                switched: true,
            }
        },
        components: {
            appOnoff: Onoff,
        },
    }
</script>

<style scoped>

</style>
