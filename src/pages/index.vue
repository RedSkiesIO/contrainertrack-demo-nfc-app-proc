<template>
  <q-page class="flex flex-center">
    <q-btn color="primary" label="make payment" @click="makePayment"></q-btn>
    <q-btn color="primary" label="recieve payment" @click="recievePayment"></q-btn>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  data() {
    return {
      recievingAddress: 'kjshgdjsdgfujyg',
    };
  },

  name: 'PageIndex',

  created() {
    console.log(this.$q);
    console.log(window);
    console.log(window.nfc);
    console.log(window.ndef);
  },

  methods: {
    recievePayment() {
      document.addEventListener('deviceready', () => {
        window.nfc.addNdefListener(
          (payload) => {
            this.log(payload);
          },
          (success) => {
            this.log('listen addNdefListener successfull');
            this.log(success);
          },
          () => {
            this.log('listen addNdefListener failed');
          },
        );

        window.nfc.addTagDiscoveredListener(
          (payload) => {
            this.log(payload);
          },
          (success) => {
            this.log('listen addTagDiscoveredListener successfull');
            this.log(success);
          },
          (failed) => {
            this.log('listen addTagDiscoveredListener failed');
            this.log(failed);
          },
        );

        window.nfc.addMimeTypeListener(
          'cryptowallet/payment',
          (payload) => {
            this.log(payload);
          },
          (success) => {
            this.log('listen addMimeTypeListener successfull');
            this.log(success);
          },
          (failed) => {
            this.log('listen addMimeTypeListener failed');
            this.log(failed);
          },
        );

        window.nfc.addNdefFormatableListener(
          (payload) => {
            this.log(payload);
          },
          (success) => {
            this.log('listen addNdefFormatableListener successfull');
            this.log(success);
          },
          (failed) => {
            this.log('listen addNdefFormatableListener failed');
            this.log(failed);
          },
        );
      }, false);
    },

    makePayment() {
      const record = window.ndef.mimeMediaRecord(
        'cryptowallet/payment',
        window.nfc.stringToBytes('sdgfsdgsfgshsfdhsd'),
      );

      window.nfc.share(
        [record],
        (success) => {
          this.log('share successfull');
          this.log(success);
        },
        (reason) => {
          this.log('share failed ');
          this.log(reason);
        },
      );
    },

    log(payload) {
      console.log(payload);
    },
  },
};
</script>
