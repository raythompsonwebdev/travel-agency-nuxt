<template>
  <aside id="language-select">
    <form id="language-selector">
      <label for="languageselectitems"
        >Language:
        <img
          id="flag-img"
          v-bind:src="
            selected !== ' '
              ? `/images/flags/${selected}.jpg`
              : `/images/flags/default.jpg`
          "
          :alt="'flag image'"
        />
        <select
          v-model="selected"
          name="languageselectitems"
          @click="itemsSearched($event.target.value)"
          aria-label="select country"
        >
          <option
            v-for="languageselectitem in onChangeImg"
            :key="languageselectitem.id"
            :value="languageselectitem.value"
          >
            {{ languageselectitem.text }}
          </option>
        </select>
      </label>
    </form>
  </aside>
</template>

<script>
import languageselect from "@/assets/json/languageitems.json";
//import defaultImage from `@/assets/images/flags/png/default.png`;

export default {
  name: "language-select",
  data() {
    return {
      selected: " ",
      // defaultImage ,
      languageselect,
    };
  },
  computed: {
    onChangeImg() {
      if (this.selected === "default") {
        return this.languageselect;
      } else if (this.selected === "United_Kingdom") {
        return this.languageselect;
      } else if (this.selected === "Germany") {
        return this.languageselect;
      } else if (this.selected === "United_States") {
        return this.languageselect;
      } else if (this.selected === "Jamaica") {
        return this.languageselect;
      } else if (this.selected === "France") {
        return this.languageselect;
      } else if (this.selected === "Spain") {
        return this.languageselect;
      } else {
        return this.languageselect;
      }
    },
  },
  methods: {
    itemsSearched(id) {
      this.selected = id;
    },
  },
};
</script>

<style lang="scss"></style>
