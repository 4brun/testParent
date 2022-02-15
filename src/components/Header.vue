<template>
  <div class="header__wrap">
    <div class="header__logo">
      <img src="@/icons/Logo.svg" alt="Logo" />
    </div>
    <div class="header__links">
      <router-link to="/">Формы</router-link>
      <router-link to="/preview">Превью</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.header__wrap {
  height: 75px;
  box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
}
.header__logo {
  position: absolute;
  left: 5%;
}
.header__links a {
  text-decoration: none;
  color: rgba(17, 17, 17, 0.48);
  margin: 12px;
}
.header__links a:hover {
  transition: 0.2s;
  color: black;
}
</style>