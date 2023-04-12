<template>
  <div id="app">
    <h1>Problema de Monty Hall</h1>
    <div class="form">
      <div v-if="!stared">
        <label for="portsAmount">Quantas Portas ?</label>
        <input
          type="text"
          id="portsAmount"
          size="3"
          v-model.number="portsAmount"
        />
        <div v-if="!started">
          <label for="selectedPorts">Qual porta é premiada ?</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DoorWin from "./components/DoorWin.vue";
export default {
  name: "App",
  components: { DoorWin },
  data: function () {
    return {
      started: false,
      portsAmount: 3,
      selectedPorts: null,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  color: #fff;
  background: #34e89e; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #0f3443,
    #34e89e
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #0f3443,
    #34e89e
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#app h1 {
  border: 1px solid #000;
  background-color: #0004;
  padding: 20px;
  margin-bottom: 60px;
}
</style>
