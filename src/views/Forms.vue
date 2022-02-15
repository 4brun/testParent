<template>
  <div class="wrapper">
    <parent-form />
    <childrens v-bind:childrens="childrens" />
  </div>
</template>

<script>
import ParentForm from "@/components/ParentForm.vue";
import Childrens from "@/components/Childrens.vue";
import ChildrenForm from "@/components/ChildrenForm.vue";

export default {
  components: { ParentForm, Childrens, ChildrenForm },
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
.wrapper {
  width: 50%;
  margin: 0 auto;
  min-height: calc(100vh - 180px);
}
</style>