<template>
<div class="communication-log-container">
    <comm-record v-for="record in commLog" :key="record.recordText" :record="record"></comm-record>
</div>
  
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import CommunicationRecord from '@/components/CommunicationRecord';
export default {
  name: 'CommunicationLog',
  components: {
      'comm-record': CommunicationRecord
  },
  computed: {
      ...mapGetters({
          commLog : "communicationLog/commLogRecordsByDate",
      })
  }
}
</script>

<style scoped>
.communication-log-container {
    border: solid 2px #0F5CA4;
    padding: 10px 10px 10px 10px;
    overflow: scroll;
    max-height: 800px;
}

@media only screen and (max-width: 600px) {
  .communication-log-container {
    max-height: initial;
    overflow: hidden;
  }
}
</style>


