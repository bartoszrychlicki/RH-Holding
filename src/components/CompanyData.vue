<template>
  <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <headerMenu />

    <main class="px-3">
      <h1>Dane rejestrowe i kontaktowe</h1>
      <p class="lead">
        Rychlicki Holding Sp. z o.o.<br />Topolowa 2/7, 80-255<br />Gdańsk
        Polska
      </p>
      <p>KRS: 0000880190<br />NIP: 957-11-30-261</p>
      <p>
        <strong>Dane kontaktowe:</strong><br />
        <Popper content="Adres skopiowany do schowka.">
          <i
            v-on:click.prevent="
              copyToClipboard('kontakt@rychlickiholding.com', $event)
            "
            class="bi bi-clipboard"
          >
            kontakt@rychlickiholding.com</i
          >
        </Popper>
      </p>
      <p>
        <strong>Faktury prosimy wysyłać na adres:</strong><br />
        <Popper content="Adres skopiowany do schowka.">
          <i
            v-on:click.prevent="
              copyToClipboard('ksiegowosc@rychlickiholding.com', $event)
            "
            class="bi bi-clipboard"
          >
            ksiegowosc@rychlickiholding.com
          </i>
        </Popper>
      </p>
    </main>

    <footer class="mt-auto text-white-50"></footer>
  </div>
</template>

<script>
import HeaderMenu from './HeaderMenu';
import copy from 'copy-to-clipboard';

export default {
  data() {
    return {
      invoiceEmail: '',
    };
  },
  components: {
    HeaderMenu,
  },
  methods: {
    copyToClipboard(email, event) {
      copy(email);
      event.preventDefault();
    },
  },
};
</script>

<style>
:root {
  --popper-theme-background-color: #747474;
  --popper-theme-background-color-hover: #333333;
  --popper-theme-text-color: #ffffff;
  --popper-theme-border-width: 0px;
  --popper-theme-border-style: solid;
  --popper-theme-border-radius: 6px;
  --popper-theme-padding: 16px;
  --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}
</style>
