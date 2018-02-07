<template>
<div>
 <v-tabs fixed icons centered>
    <v-tabs-bar dark color="cyan">
      <v-tabs-slider color="yellow"></v-tabs-slider>
      <v-tabs-item href="#tab-1" class="my-tab-item">
        <!-- <v-icon>phone</v-icon> -->
        <div class="tab-item-container">
          <span>All with unpaid invoices</span>
          <span></span>
        </div>
        <div class="tab-item-numbers">
          <span class="tab-item-amount">4100 Euro</span>
          <span class="tab-item-result-counter">45</span>
        </div>
      </v-tabs-item>
      <v-tabs-item href="#tab-2">
        <v-icon>favorite</v-icon>
        Favorites
      </v-tabs-item>
      <v-tabs-item href="#tab-3">
        <v-icon>account_box</v-icon>
        Nearby
      </v-tabs-item>
    </v-tabs-bar>
    <v-tabs-items>
      <v-tabs-content
        v-for="i in 3"
        :key="i"
        :id="'tab-' + i"
      >
      </v-tabs-content>
    </v-tabs-items>
  </v-tabs>
</div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      items: ['Item One', 'Item Seventeen', 'Item Five'],
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>
<style>
.tab-item-container{
  border: 3px solid white;
  border-radius: 2rem;
  padding: 5px;
  white-space: pre-wrap;
  display: inline-flex;
}
.my-tab-item{
  display: inline-block;
}
.tab-item-numbers{
  display: inline-grid;
}
.tab-item-amount{
    position: absolute;
    left: auto;
    top: 5px;
    white-space: pre-wrap;
    font-size: 0.8rem;
}
.tab-item-result-counter{
    position: absolute;
    left: auto;
    bottom: 5px;
    white-space: pre-wrap;
    font-size: 0.8rem;
}
</style>

