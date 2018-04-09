<template>
    <div id="tab-container">
        <ul>
            <filter-tab v-for="tab in tabs" v-bind:key="tab.key" :title="tab.title" :amount="tab.amount" :counter="tab.counter" :is-active="tab.active" :tab="tab">
            </filter-tab>
        </ul>
    </div>
</template>


<script>
import FilterTab from "@/components/FilterTab";
import { mapState,mapGetters } from "vuex";
export default {
  name: "FilterTabContainer",
  computed : {
    ...mapState({
      tabs: state => state.filterTabs.tabs
    })
  },
  components: {
    "filter-tab": FilterTab
  },
  data() {
    return {

    };
  }
};
</script>

<style scoped>

#tab-container > ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  /* justify-content: space-evenly; */
  font-family: Roboto, sans-serif;
  line-height: 1.5;
  /* background: #00bcd4; */
  background: #83acd2;
  padding: 0;
}

@media only screen and (max-width: 600px) {
  #tab-container > ul {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media only screen and (max-width: 300px) {
  #tab-container > ul {
    grid-template-columns: repeat(2, 1fr);
  }
}

#tab-container > ul > li:hover {
  background: #0F5CA4;
  /* background: burlywood; */
}
</style>

