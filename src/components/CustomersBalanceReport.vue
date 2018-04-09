<template>
  <div>
    <filter-tab-container></filter-tab-container>
    <customers-filter-panel></customers-filter-panel>
    <customers-table></customers-table>
  </div>
</template>

<script>
import FilterTabContainer from "@/components/FilterTabContainer";
import CustomersTable from "@/components/CustomersTable";
import CustomersFilterPanel from '@/components/CustomersFilterPanel'
export default {
  name: "CustomersBalanceReport",
  components: {
    "filter-tab-container": FilterTabContainer,
    "customers-table": CustomersTable,
    "customers-filter-panel": CustomersFilterPanel
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

