<template>
    <f7-page>
      <f7-navbar title="Мероприятие"></f7-navbar>
      <f7-block>
        <f7-row>
        <f7-col>
          <f7-button fill color="red">Red</f7-button>
        </f7-col>
        <f7-col>
          <f7-button fill color="red">Red</f7-button>
        </f7-col>
      </f7-row>
        <br>
        <f7-row>
          <f7-col>
            <f7-button fill color="red">Red</f7-button>
          </f7-col>
          <f7-col>
            <f7-button fill color="red">Red</f7-button>
          </f7-col>
        </f7-row>
      </f7-block>
    </f7-page>
</template>

<script>
  export default {
    name: "event",
    props: {
      eventId: String
    },
    data() {
      return {}
    },
    mounted() {

    },
    methods: {},
    computed: {}
  }
</script>

<style scoped>

</style>
