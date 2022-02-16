<template>
  <div class="wrapper">
    <h3 class="preveiw__title">Персональные данные</h3>
    <h4 class="preveiw__parent">
      {{ parent.name || "Имя не задано" }},
      {{ parent.age || "Возраст не указан" }}
      <span v-if="parent.age">лет</span>
    </h4>
    <h3 v-if="childrens.length" class="preveiw__title">Дети</h3>
    <div class="preveiw__childrens">
      <p v-for="item in childrens" :key="item.id" class="preweiw__item">
        {{ item.name || "Имя ребенка не задано" }},
        {{ item.age || "Возраст ребенка не указан" }}
        <span v-if="item.age">лет</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Preveiw",
  computed: {
    childrens() {
      return this.$store.getters.CHILDRENS;
    },
    parent() {
      return this.$store.getters.PARENT;
    },
  },
};
</script>

<style>
.preveiw__title {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-top: 30px;
  margin-bottom: 20px;
}
.preveiw__parent {
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
}
.preweiw__item {
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  padding: 10px 20px;
  background-color: #f1f1f1;
  margin-bottom: 20px;
  width: max-content;
}
</style>