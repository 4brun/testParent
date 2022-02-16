<template>
  <div>
    <h3 class="parent__title">Персональные данные</h3>
    <form class="parent__form">
      <div class="text-field">
        <input
          class="parent__input"
          type="text"
          value="name"
          v-model="parent.name"
        />
        <label class="parent__label" for="name">Имя</label>
      </div>
      <div class="text-field">
        <input
          class="parent__input"
          type="text"
          value="age"
          v-model.number="parent.age"
        />
        <label class="parent__label" for="age">Возраст</label>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ParentForm",
  data() {
    return {
      parent: this.$store.getters.PARENT,
    };
  },
};
</script>

<style>
.parent__form {
  display: flex;
  flex-direction: column;
}
.parent__title {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-top: 30px;
}
.parent__input {
  font-size: 14px;
  line-height: 24px;
  padding: 20px 8px 8px 16px;
}
.parent__label {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  font-size: 14px;
  padding: 8px 16px;
  pointer-events: none;
  border: 1px solid transparent;
  transform-origin: 0 0;
}
</style>