<template>
  <v-form v-model="valid">
    <v-container id="#customer-details" class="nopadding" fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex class="nopadding" xs12>
          <h3>Customer Details</h3>
        </v-flex>
        <v-flex class="nopadding" xl2 lg2 md2 xs12>
          <v-text-field readonly v-model="customer.customerId" label="SAP Number" />
        </v-flex>
        <v-flex class="nopadding" xl2 lg3 md3 xs12>
          <v-text-field label="Customer Name" v-model="customer.customerName" required :readonly="readOnly"></v-text-field>
        </v-flex>
        <v-flex class="nopadding" xl2 lg2 md2 xs12>
          <v-select label="Gender" required :readonly="readOnly" :items="genderOptions" v-model="customer.gender"></v-select>

        </v-flex>
        <v-flex class="nopadding" xl2 lg1 md1 xs12>
          <v-text-field readonly v-model="customer.age" label="Age" />
        </v-flex>
        <v-flex class="nopadding" lg2 xs12>
          <v-menu :disabled="readOnly" ref="menu" lazy :close-on-content-click="false" v-model="menu" transition="scale-transition" offset-y full-width :nudge-right="40" min-width="290px" :return-value.sync="customer.dob">
            <v-text-field slot="activator" label="Date of birth" v-model="customer.dob" prepend-icon="event" :readonly="readOnly"></v-text-field>
            <v-date-picker v-model="customer.dob" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn flat color="primary" @click="$refs.menu.save(customer.dob)">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-flex>
        <v-flex class="nopadding" xs12 md3>
          <v-text-field label="Customer Mobile Number" v-model="customer.mobile" required :readonly="readOnly"></v-text-field>
        </v-flex>
        <v-flex class="nopadding" xs12 md3>
          <v-text-field label="Customer Phone Number" v-model="customer.tel" required :readonly="readOnly"></v-text-field>
        </v-flex>
        <v-flex class="nopadding" xs12 md2>
          <v-text-field label="Customer Fax" v-model="customer.fax" required :readonly="readOnly"></v-text-field>
        </v-flex>
        <v-flex class="nopadding" xs12 md3>
          <v-text-field label="Customer Email" v-model="customer.email" required :readonly="readOnly"></v-text-field>
        </v-flex>
        <v-flex class="nopadding" xs12 md3>
          <v-text-field label="Next of Kin Name" v-model="customer.nextKinName" required :readonly="readOnly"></v-text-field>
        </v-flex>
        <v-flex class="nopadding" xs12 md3>
          <v-text-field label="Next of Kin Mobile Number" v-model="customer.nextKinMobile" required :readonly="readOnly"></v-text-field>
        </v-flex>
        <v-flex class="nopadding" xs12 md3>
          <v-text-field label="Next of Kin Phone Number" v-model="customer.nextKinTel" required :readonly="readOnly"></v-text-field>
        </v-flex>
        <v-flex class="nopadding" xs12 md3>
          <v-text-field label="Next of Kin Email" v-model="customer.nextKinEmail" required :readonly="readOnly"></v-text-field>
        </v-flex>
        <v-flex class="nopadding" xs12>
          <h3>Categories</h3>
        </v-flex>
        <v-flex class="nopadding" xs12 md2>
          <v-select :readonly="readOnly" color="black" label="Flag" :items="flagOptions" v-model="customer.flag">
            <template slot="selection" slot-scope="data">
              <div v-if="data.item !=='nil'" :style="{background: data.item, color: 'transparent',width: '100%'}">{{data.item}}</div>
              <div v-if="data.item ==='nil'">{{data.item}}</div>
            </template>
            <template slot="item" slot-scope="data" :style="{background: data.item}">
              <div v-if="data.item !== 'nil'" :style="{background: data.item, color: 'transparent',width: '100%'}">{{data.item}}</div>
              <div v-if="data.item ==='nil'">{{data.item}}</div>
            </template>
          </v-select>
        </v-flex>
        <v-flex class="nopadding" xs12 md2>
          <v-select :readonly="readOnly" color="black" label="Other" :items="otherOptions" v-model="customer.other">
            <template slot="selection" slot-scope="data">
              <span :class="{ 'text-color-red': data.item === 'Passed Away'}">{{data.item}}</span>
            </template>
            <template slot="item" slot-scope="data">
              <span :class="{ 'text-color-red': data.item === 'Passed Away'}">{{data.item}}</span>
            </template>
          </v-select>
        </v-flex>
        <v-flex class="nopadding" xs12 md2>
          <v-select :readonly="readOnly" color="black" label="Contact" :items="contantOptions" v-model="customer.contact">
            <template slot="selection" slot-scope="data">
              <span :class="{ 'text-color-red': data.item === 'Do not Contact'}">{{data.item}}</span>
            </template>
            <template slot="item" slot-scope="data">
              <span :class="{ 'text-color-red': data.item === 'Do not Contact'}">{{data.item}}</span>
            </template>
          </v-select>
        </v-flex>
        <v-flex class="nopadding" xs12 md3>
          <v-select :readonly="readOnly" color="black" label="Legal" :items="legalOptions" v-model="customer.legal">
            <template slot="selection" slot-scope="data">
              <span :class="{ 'text-color-red': data.item === 'Handled by Lawyers'}">{{data.item}}</span>
            </template>
            <template slot="item" slot-scope="data">
              <span :class="{ 'text-color-red': data.item === 'Handled by Lawyers'}">{{data.item}}</span>
            </template>
          </v-select>
        </v-flex>
        <v-flex xs12 md2>

          <v-tooltip bottom>
            <v-btn v-if="readOnly" slot="activator" @click="readOnly = !readOnly" color="primary">
              <v-icon>fas fa-edit</v-icon>
            </v-btn>
            <v-btn v-if="!readOnly" slot="activator" @click="onCustomerDetailsSubmit(customer)" color="primary">
              <v-icon>fas fa-save</v-icon>
            </v-btn>
            <span v-if="readOnly">Edit</span>
            <span v-if="!readOnly">Save</span>
          </v-tooltip>
        </v-flex>
      </v-layout>
    </v-container>

  </v-form>
</template>

<script>
export default {
  props: ["customer"],
  name: "CustomerDetails",
  data() {
    return {
      valid: true,
      readOnly: true,
      genderOptions: ["Male", "Female"],
      menu: false,
      flagOptions: ["nil", "red", "green", "yellow"],
      otherOptions: ["nil", "Passed Away"],
      contantOptions: ["In contact list", "Do not Contact"],
      legalOptions: ["nil", "Handled by Lawyers"]
    };
  },
  methods: {
    onCustomerDetailsSubmit(customer) {
      this.readOnly = !this.readOnly;
    }
  }
};
</script>

<style scoped>
.nopadding {
  padding: 0px 10px 0px 5px !important;
}

.text-color-red {
  color: red;
}
</style>


