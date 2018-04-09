<template>
  <filter-tab-container></filter-tab-container>
</template>

<script>
import FilterTabContainer from "@/components/FilterTabContainer";
export default {
  name: "CustomersBalanceReport",
  components: {
    "filter-tab-container": FilterTabContainer
  },
  data() {
    return {
      items: ["Item One", "Item Seventeen", "Item Five"],
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>
<style>

</style>

