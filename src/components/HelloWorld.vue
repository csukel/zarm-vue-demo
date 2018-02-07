<template>
<div>
 <v-tabs fixed icons centered>
    <v-tabs-bar dark color="cyan">
      <v-tabs-slider color="yellow"></v-tabs-slider>
      <v-tabs-item href="#tab-1" >
        <div class="tab-item-container">All with unpaid invoices</div>
      </v-tabs-item>
      <v-tabs-item href="#tab-2" >
        <div class="tab-item-container">Balance &lt;= 1000</div>
      </v-tabs-item>
      <v-tabs-item href="#tab-3" >
        <div class="tab-item-container">1000 &lt; Balance &lt;= 10000</div>
      </v-tabs-item>
      <v-tabs-item href="#tab-4" >
        <div class="tab-item-container">10000 &lt; Balance &lt;= 50000</div>
      </v-tabs-item>
      <v-tabs-item href="#tab-5" >
        <div class="tab-item-container">Balance &gt; 50000</div>
      </v-tabs-item>
      <v-tabs-item href="#tab-6" >
        <div class="tab-item-container">Do not contact</div>
      </v-tabs-item>
      <v-tabs-item href="#tab-7" >
        <div class="tab-item-container">Handled by Lawyer</div>
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
      items: ["Item One", "Item Seventeen", "Item Five"],
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>
<style>
.tab-item-container {
  border: 3px solid white;
  border-radius: 1rem;
  white-space: pre-line;
  width: 100%;
  height: 90%;
  /* display: inline-flex; */
}
.my-tab-item {
  display: inline-block;
}
.tab-item-numbers {
  display: inline-grid;
}
.tab-item-amount {
  position: absolute;
  left: auto;
  top: 5px;
  white-space: pre-wrap;
  font-size: 0.8rem;
}
.tab-item-result-counter {
  position: absolute;
  left: auto;
  bottom: 5px;
  white-space: pre-wrap;
  font-size: 0.8rem;
}
/* .tabs:not(.tabs--grow):not(.tabs--mobile) .tabs__item {
    padding: 0;
} */
</style>

