<template>
  <section class="holiday-search-sidebar">
    <h2 id="holiday-search-title">Holiday Search</h2>
    <form id="holiday-search-form" @submit.prevent="onSubmit">
      <label class="label-wide" for="locations">
        Where are you going ?
        <select name="locations" class="select-wide">
          <option
            v-for="location in searchform.locations"
            :key="location.id"
            :value="location"
          >
            {{ location }}
          </option>
        </select>
      </label>

      <label for="date" class="label-wide"
        ><span> When are you going ? </span>
        <select name="date" class="select-date-year">
          <option v-for="date in searchform.date" :key="date.id" :value="date">
            {{ date }}
          </option>
        </select>
        <select id="select-month" name="month">
          <option
            v-for="month in searchform.month"
            :key="month.id"
            :value="month"
          >
            {{ month }}
          </option>
        </select>
        <select name="year" class="select-date-year">
          <option v-for="year in searchform.year" :key="year.id" :value="year">
            {{ year }}
          </option>
        </select>
      </label>

      <label class="label-wide" for="duration">
        Duration

        <select name="duration" class="select-wide">
          <option
            v-for="duration in searchform.duration"
            :key="duration.id"
            :value="duration"
          >
            {{ duration }}
          </option>
        </select>
      </label>

      <label class="label-half" for="board"
        >Board
        <select name="board" class="select-half">
          <option
            v-for="board in searchform.board"
            :key="board.id"
            :value="board"
          >
            {{ board }}
          </option>
        </select>
      </label>

      <label class="label-half" for="star"
        >Star
        <select name="star" class="select-half">
          <option v-for="star in searchform.star" :key="star.id" :value="star">
            {{ star }}
          </option>
        </select>
      </label>

      <label class="label-half" for="adults"
        >Adults
        <select name="adults" class="select-half">
          <option
            v-for="adult in searchform.adults"
            :key="adult.id"
            :value="adult"
          >
            {{ adult }}
          </option>
        </select>
      </label>

      <label class="label-half" for="children"
        >Children 0-17
        <select name="children" class="select-half">
          <option
            v-for="child in searchform.children"
            :key="child.id"
            :value="child"
          >
            {{ child }}
          </option>
        </select>
      </label>

      <input id="holiday-search-btn" type="submit" value="Find Holiday" />
    </form>
  </section>
</template>

<script>
export default {
  name: "search-form",
  props: {
    searchform: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      // locations,
      // date,
      // month,
      // year,
      // duration,
      // board,
      // star,
      // adults,
      // children,
    };
  },

  methods: {
    onSubmit() {
      if (
        this.locations &&
        this.date &&
        this.month &&
        this.year &&
        this.duration &&
        this.board &&
        this.star &&
        this.adults &&
        this.children
      ) {
        const findHoliday = {
          locations: this.locations,
          date: this.date,
          month: this.month,
          year: this.year,
          duration: this.duration,
          board: this.board,
          star: this.star,
          adults: this.adults,
          children: this.children,
        };

        console.log(findHoliday);

        this.locations = null;
        this.date = null;
        this.month = null;
        this.year = null;
        this.duration = null;
        this.board = null;
        this.star = null;
        this.adults = null;
        this.children = null;
      }
    },
    // SearchItemBtn(item) {
    //   this.$emit("seasonClick", item);
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
