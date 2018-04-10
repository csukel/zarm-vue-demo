<template>

    <div id="customers-table">
        <v-data-table :headers="headers" :items="customers" :pagination.sync="pagination" item-key="customerId"  class="elevation-1">
            <template slot="headers" slot-scope="props">
                <tr class="columnHeader">
                    <th style="white-space:initial;" :class="['column','myColText',header.sortable ? 'sortable' : '', header.sortable && pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']" @click="changeSort(header)" :key="header.text" v-for="header in props.headers">
                        <v-icon class="myArrowUpDown" v-show="header.sortable" small>arrow_upward</v-icon>
                        {{header.text}}
                    </th>
                </tr>

            </template>

            <template slot="items" slot-scope="props">
                <tr :key="props.index" :class="[props.index % 2 === 1 ? 'tableRowOdd' : 'tableRowEven']" style="cursor:pointer;" @click="onCustomerClicked(props.item)" >
                    <td class="text-xs-center">{{ props.item.customerId }}</td>
                    <td class="text-xs-center">{{ props.item.customerName }}</td>
                    <td class="text-xs-center">{{ props.item.balance }}</td>
                    <td class="text-xs-center">{{ props.item.lastPayInvDate }} </td>
                    <td class="text-xs-center">{{ props.item.lastContactDate }} </td>
                    <td class="text-xs-center">{{ props.item.typeOfLastContact }} </td>
                    <td class="text-xs-center">{{ props.item.nextContactDate }} </td>
                    <td class="text-xs-center">{{ props.item.insurance }} </td>
                    <td class="text-xs-center">{{ props.item.ageOfEarliestUnpaidInv }} </td>
                    <td class="text-xs-center otherText">{{ props.item.other }} </td>
                    <td v-bind:style="{background: props.item.flag}" class="text-xs-center" ></td>
                </tr>

            </template>
        </v-data-table>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "CustomersTable",
  computed: {
    ...mapState({
      headers: state => state.customers.headers,
      customers: state => state.customers.customers_balances
    })
  },
  methods: {
    changeSort(header) {
      const column = header.value;
      if (header.sortable) {
        if (this.pagination.sortBy === column) {
          this.pagination.descending = !this.pagination.descending;
        } else {
          this.pagination.sortBy = column;
          this.pagination.descending = false;
        }
      }
    },
    onCustomerClicked (item){
        this.$router.push({name:'CustomerPage',params: {customerId:item.customerId,customer:item}});
    }
  },
  data() {
    return {
      pagination: {
        //no initial sorting
        sortBy: null
      }
    };
  }
};
</script>

<style scoped>
#customers-table {
  padding: 10px 0px 0px 0px;
}

.columnHeader {
  /* background-color: gainsboro; */
  background-color: #0F5CA4;
  
}

.myColText {
    color: white !important;
}
.myArrowUpDown {
    color: white !important;
}

.tableRowOdd {
    background-color: #c9dcee ;
}
.tableRowEven {
    background-color: #83acd2 ;
}
.otherText {
    color:red
}
</style>


