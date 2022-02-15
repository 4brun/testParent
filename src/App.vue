<template>
  <div id="app">
    <Header />
    <router-view />
    <footer class="footer">
      <p class="footer__text">all rights reserved</p>
    </footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: { Header },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap");
*::before,
*::after {
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Montserrat", sans-serif;
}
body {
  margin: 0;
  box-sizing: border-box;
}
input {
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  height: 55px;
  margin: 5px 0;
  outline: none;
  box-sizing: border-box;
  width: 100%;
}
input:hover {
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
    0px 4px 56px rgba(51, 51, 51, 0.16);
  transition: 0.2s;
}

.text-field {
  position: relative;
}
.footer {
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
}
.footer__text {
  font-size: 13px;
  line-height: 16px;
}
</style>
