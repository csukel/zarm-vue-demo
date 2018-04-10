<template>
    <div v-if="customer">
        <v-container grid-list-xl fluid>
            <v-layout row wrap>
                <v-flex xl8 lg8 md6 xs12>
                    <customer-details :customer="customer"></customer-details>
                    <invoices-table></invoices-table>
                    <communication-actions :customer="customer_balance"></communication-actions>
                </v-flex>
                <v-flex xl4 lg4 md6 xs12 >
                    <communication-log></communication-log>
                </v-flex>
            </v-layout>
        </v-container>

    </div>
</template>

<script>
import CustomerDetails from "@/components/CustomerDetails";
import CommunicationLog from '@/components/CommunicationLog';
import InvoicesTable from '@/components/InvoicesTable';
import CommunicationActions from '@/components/CommunicationActions';
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  components: {
    "customer-details": CustomerDetails,
    "communication-log": CommunicationLog,
    "invoices-table" : InvoicesTable,
    "communication-actions": CommunicationActions
  },
  name: "CustomerPage",
    props: ["customer_balance"],
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


