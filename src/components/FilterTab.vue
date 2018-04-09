<template>
    <li v-bind:class="{ active: isActive}" @click="onTabClicked(tab)">
        <div class="tab-text">
            {{title}}
        </div>
        <div class="tab-numbers">
            <span class="tab-numbers-amount">{{amount}}</span>
            <span class="tab-numbers-count">{{counter}}</span>
        </div>
    </li>

</template>


<script>
import { mapState,mapGetters, mapActions } from "vuex";
export default {
  name: "FilterTab",
  props: ["title", "isActive", "counter", "amount","tab"],
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      onTabClicked : 'filterTabs/setActive'
    })
  }
};
</script>

<style scoped>
.active {
  background: #0F5CA4;
}

@media only screen and (max-width: 600px) {
  #tab-container > ul {
    grid-template-columns: repeat(4, 1fr);
  }
  .tab-numbers {
    display: none !important;
  }
  #tab-container > ul > li {
    display: flex !important;
    padding: 0 0 !important;
  }
}

#tab-container > ul > li {
  display: grid;
  grid-column-gap: 0.5rem;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  grid-template-columns: repeat(3, 1fr);
  color: white;
  border: 1px solid white;
}

.tab-numbers-amount {
  grid-row: 1;
}

.tab-numbers-count {
  grid-row: 2;
  display: flex;
  flex-direction: column-reverse;
}

.tab-text {
  grid-column-start: 1;
  grid-column-end: 3;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 60%;
  margin: auto;
  font-size: 0.95rem !important;
}

.tab-numbers {
  grid-column-start: 3;
  grid-column-end: 3;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  /* flex-direction: column; */
  font-size: 0.70rem !important;
}
</style>


