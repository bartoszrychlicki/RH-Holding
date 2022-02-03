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
        kontakt@rychlickiholding.com
      </p>
      <p>
        <strong>Faktury prosimy wysyłać na adres:</strong><br />
        <a href="#" v-on:click.prevent="copyEmailToClipboard()"
          >ksiegowosc@rychlickiholding.com</a
        >
      </p>

      <p class="lead">
        <a
          href="#"
          class="btn btn-lg btn-secondary fw-bold border-white bg-white"
          >Learn more</a
        >
      </p>
    </main>

    <footer class="mt-auto text-white-50">
      <p>
        Cover template for
        <a href="https://getbootstrap.com/" class="text-white">Bootstrap</a>, by
        <a href="https://twitter.com/mdo" class="text-white">@mdo</a>.
      </p>
    </footer>
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
    copyEmailToClipboard() {
      copy('tekst123');
    },
  },
};
</script>

<style></style>
