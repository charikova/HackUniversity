<template>
  <div>
    <div class="apple-pay-button" v-if="showAppleButton" @click="PayButtonClicked"></div>
    <br />
    <p v-if="showError">If you had a more magical brower, an Apple Pay button would appear here.</p>
  </div>
</template>

<script>
  import {onPayClicked} from "../js/applepay";


  const merchantIdentifier = "merchant.io.github.justindonnelly";
  export default {
    name: "PayButton",
    data: () => ({
      showAppleButton: true,
      showError: false
    }),
    mounted() {
      if (window.ApplePaySession) {
        ApplePaySession.canMakePaymentsWithActiveCard(merchantIdentifier)
          .then(function(canMakePayments) {
            //alert('more');
            if (canMakePayments) {
              this.showAppleButton = true;
            } else {
              this.showError = true;
            }
          })
          .catch(()=>{
           // alert('fuck you');
          })
      } else {
        this.showError = true;
      }
    },
    methods: {
      PayButtonClicked: () => {
        onPayClicked();
      }
    }
  };
</script>

<style scoped>
  .apple-pay-button {
    background-color: black;
    background-image: -webkit-named-image(apple-pay-logo-white);
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 100% calc(60% + 2px);
    border-radius: 5px;
    float: left;
    height: 30px;
    margin: 0px 0px 10px 0px;
    width: 100px;
  }
  p {
    font-size: 1rem;
  }
</style>
