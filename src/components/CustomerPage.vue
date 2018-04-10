<template>
    <div v-if="customer">
        <customer-details :customer="customer"></customer-details>
    </div>
</template>

<script>
import CustomerDetails from "@/components/CustomerDetails";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  components: {
    "customer-details": CustomerDetails
  },
  name: "CustomerPage",
  //   props: ["customer"],
  created() {
    var t = null;
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.setSelectedCustomer(to.params.customerId);
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.setSelectedCustomer(to.params.customerId);
    next();
  },
  data() {
    return {
      invoices: []
    };
  },
  computed: {
    ...mapGetters({
      customer: "customers/selectedCustomer"
    })
  },
  methods: {
    ...mapActions({
      setSelectedCustomer: "customers/setSelectedCustomer"
    })
  }
};
</script>

<style scoped>

</style>


