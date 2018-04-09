<template>
    <div>
        <v-container class="filter-panel" grid-list-xl fluid>
            <v-layout row wrap align-center>
                <v-flex xl2 lg2 md3 xs6>
                    <v-text-field label="Customer"></v-text-field>
                </v-flex>
                <v-flex xl2 lg2 md3 xs6>
                    <v-text-field label="Case"></v-text-field>
                </v-flex>
                <v-flex xl1 lg1 md2 xs6>
                    <v-select label="Insurance"></v-select>
                </v-flex>
                <v-flex xl1 lg1 md2 xs6>
                    <v-select label="Flag"></v-select>
                </v-flex>
                <v-flex xl1 lg2 md3 xs6>
                    <v-text-field label="Age - Months (Min)"></v-text-field>
                </v-flex>
                <v-flex xl1 lg2 md3 xs6>
                    <v-text-field label="Age - Months (Max)"></v-text-field>
                </v-flex>
                <v-flex xl1 lg1 md2 xs6>
                    <v-btn color="blue">Search
                        <v-icon right>fas fa-search</v-icon>
                    </v-btn>
                </v-flex>
                <v-flex xl1 lg1 md2 xs6>
                    <v-btn color="green">Export
                        <v-icon right>fas fa-file-excel</v-icon>
                    </v-btn>
                </v-flex>
            </v-layout>
            <v-layout row wrap align-center>

            </v-layout>

        </v-container>
    </div>
</template>

<script>
export default {
  name: "CustomersFilterPanel"
};
</script>


<style scoped>
.filter-panel {
    margin-top:5px;
    padding: 0px 5px 0px 5px;
    /* border: solid 2px #0F5CA4; */
    background:#c9dcee
}
</style>


