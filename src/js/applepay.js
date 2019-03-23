// var merchantIdentifier = 'merchant.io.github.justindonnelly';
var merchantIdentifier = 'merchant.io.github.justindonnelly';


function performValidation(url) {
  return new Promise(function(resolve, reject) {
    var merchantSession = {};
    merchantSession.merchantIdentifier = merchantIdentifier;
    merchantSession.merchantSessionIdentifier = 'fake-session-id';
    merchantSession.nonce = 'fake-nonce';
    merchantSession.domainName = 'example.com';
    merchantSession.epochTimestamp = '1467051059';
    merchantSession.signature = 'fake-signature';
    resolve(merchantSession);
  });
}

function sendPaymentToken(token) {
  return new Promise(function(resolve, reject) {
    resolve(true);
  });
}

/**
 * Launches payment request that does not require shipping.
 */
export function onPayClicked() {  // eslint-disable-line no-unused-vars
  try {
    alert('norm');
    var request = {
      countryCode: 'US',
      currencyCode: 'USD',
      supportedNetworks: ['visa', 'masterCard'],
      merchantCapabilities: ['supports3DS'],
      requiredShippingAddressFields: ['postalAddress'],
      total: { label: 'Fake Merchant', amount: '155.00' },
    }

    var session = new ApplePaySession(1, request);

    session.onvalidatemerchant = function(event) {
      performValidation(event.validationURL)
        .then(function(merchantSession) {
          session.completeMerchantValidation(merchantSession);
        });
    }

    session.onpaymentauthorized = function(event) {
      sendPaymentToken(event.payment.token)
        .then(function(success) {
          session.completePayment(success ? ApplePaySession.STATUS_SUCCESS :
            ApplePaySession.STATUS_FAILURE);
          console.log('Thank you!');
        });
    }

    session.oncancel = function(event) {
      console.log("You cancelled. Sorry it didn't work out.");
    }

    alert('i am close');

    session.begin();
    alert('nah');
  } catch (e) {
    console.log('Developer mistake: \'' + e.message + '\'');
  }
}
