<template>
  <div>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 md3>
          <v-menu ref="menu" lazy :close-on-content-click="false" v-model="menu" transition="scale-transition" offset-y full-width :nudge-right="40" min-width="290px" :return-value.sync="customer.dob">
            <v-text-field slot="activator" label="Next Contact" v-model="customer.nextContactDate" prepend-icon="event"></v-text-field>
            <v-date-picker v-model="customer.nextContactDate" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn flat color="primary" @click="$refs.menu.save(customer.nextContactDate)">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-flex>
        <v-flex xs12 md7>
          <v-text-field label="Communication Notes"></v-text-field>
        </v-flex>
        <v-flex xs12 md2>
          <v-btn color="primary">Post</v-btn>
        </v-flex>
        <!-- <v-flex xs12 md8></v-flex> -->
        <v-flex xs6 md2>
          <v-btn color="primary">Send SMS</v-btn>
        </v-flex>
        <v-flex xs6 md2>
          <v-btn color="primary">Close</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>

</template>

<script>
export default {
  name: "CommunicationActions",
  props: ["customer"],
  data() {
    return {
      menu: false
    };
  }
};
</script>

<style scoped>

</style>

