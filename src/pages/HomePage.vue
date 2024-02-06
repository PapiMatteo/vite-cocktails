<script>
import axios from 'axios';
import { store } from '../store';

export default {
  data(){
    return {
      store,
      cocktails: [],
    }
  },
  created() {
    axios.get(`${this.store.serverUrl}/api/cocktails`).then((resp) => {
      this.cocktails = resp.data.result;
    })
  }
}
</script>

<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3 my-4">
      <div v-for="cocktail in cocktails" class="col" :key="cocktail.id">
        <div class="card h-100">
          <img :src="`${store.serverUrl}/storage/${cocktail.image}`" alt="">
          <div class="card-body">
            <h4>{{ cocktail.name }}</h4>
            <h6>{{ cocktail.glass_type }}</h6>
            <h6>{{ cocktail.instruction }}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
