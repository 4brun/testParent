<template>
  <form class="children__form">
    <div class="text-field">
      <input
        class="children__input"
        type="name"
        v-model="item.name"
        value="name"
      />
      <label class="children__label" for="name">Имя</label>
    </div>
    <div class="text-field">
      <input
        class="children__input"
        type="text"
        value="age"
        v-model.number="item.age"
      />
      <label class="children__label" for="age">Возраст</label>
    </div>
    <button class="children__del" @click.prevent="deleteChildren(item.id)">
      Удалить
    </button>
  </form>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  methods: {
    deleteChildren(id) {
      this.$store.commit("DELETE_CHILDREN", id);
    },
  },
};
</script>

<style scoped>
.text-field {
  width: 100%;
  margin-right: 18px;
}
.children__form {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.children__input {
  font-size: 14px;
  line-height: 24px;
  padding: 20px 8px 8px 16px;
}
.children__label {
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
.children__del {
  border: none;
  background-color: #fff;
  font-size: 14px;
  line-height: 24px;
  color: #01a7fd;
  cursor: pointer;
}
.children__del:hover {
  transition: 0.2s;
  color: #0f79af;
}
</style>