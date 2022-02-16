<template>
  <div>
    <div class="children__wrapper">
      <h3 class="children__title">Дети (макс. 5)</h3>
      <transition name="fade">
        <button
          v-if="childrens.length < 5"
          class="children__add"
          @click="addChildren"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.13332 7.85555C1.50125 7.85555 0.988866 8.36794 0.988867 9C0.988867 9.63206 1.50126 10.1445 2.13332 10.1445L7.85544 10.1445L7.85545 15.8668C7.85545 16.4989 8.36784 17.0113 8.9999 17.0113C9.63196 17.0113 10.1444 16.4989 10.1444 15.8668L10.1443 10.1445L15.8667 10.1445C16.4988 10.1445 17.0112 9.63207 17.0112 9.00001C17.0112 8.36795 16.4988 7.85556 15.8667 7.85556L10.1443 7.85556L10.1443 2.13338C10.1443 1.50132 9.63195 0.988927 8.99989 0.988927C8.36783 0.988927 7.85544 1.50131 7.85544 2.13338L7.85544 7.85555L2.13332 7.85555Z"
            />
          </svg>
          Добавить ребенка
        </button>
      </transition>
    </div>
    <transition-group name="list" tag="p">
      <children-form
        v-for="item in childrens"
        :key="item.id"
        v-bind:item="item"
      />
    </transition-group>
    <transition name="fade">
      <router-link to="/preview">
        <button class="children__save" v-if="childrens.length !== 0">
          Сохранить
        </button>
      </router-link>
    </transition>
  </div>
</template>

<script>
import ChildrenForm from "./ChildrenForm.vue";
export default {
  components: { ChildrenForm },
  props: ["childrens"],
  methods: {
    addChildren() {
      const id = Date.now();
      const newChildren = {
        id: id,
        name: "",
        age: "",
      };
      this.$store.commit("ADD_CHILDREN", newChildren);
    },
  },
};
</script>

<style>
.children__wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 10px;
}
.children__title {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}
.children__add {
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 24px;
  color: #01a7fd;
  fill: #01a7fd;
  border: 2px solid #01a7fd;
  border-radius: 100px;
  background-color: #fff;
  cursor: pointer;
  height: 45px;
  padding: 5px 10px;
}
.children__add:hover {
  transition: 0.2s;
  background-color: #01a7fd;
  color: #fff;
  fill: #fff;
}
.children__add svg {
  padding-right: 8px;
}
.children__save {
  border-radius: 100px;
  background-color: #01a7fd;
  font-size: 14px;
  line-height: 24px;
  color: #fff;
  border: 1px solid #01a7fd;
  padding: 10px 20px;
  cursor: pointer;
  margin: 40px 0;
}
.children__save:hover {
  transition: 0.2s;
  color: #01a7fd;
  background-color: #fff;
  border: 1px solid #01a7fd;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>