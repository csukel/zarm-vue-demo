<template>
    <div class="comm-record-container">
        <div class="comm-record-wrapper" :style="{background:record.color}">
            <span class="record-title-text">{{record.recordDate}} ({{record.createdBy}})</span>
            <br/> {{record.recordText}}
            <div v-if="record.balance">
                Total Balance: {{record.balance}}
            </div>

        </div>
    </div>

</template>

<script>
export default {
  name: "CommunicationRecord",
  props: ["record"]
};
</script>

<style scoped>
.comm-record-container {
  display: block;
}
.comm-record-wrapper {
  border: solid 1px #0f5ca4;
  margin-top: 5px;
  padding: 10px 10px 10px 10px;
  border-radius: 0.5rem;
  display: inline-block;
  font-size: 18px;
}
.record-title-text {
  text-decoration: underline;
}
</style>


