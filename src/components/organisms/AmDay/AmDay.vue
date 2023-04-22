<template>
  <div class="am_day">
    <div
      :class="[
        'greeting',
        { greeting_with_username: userName, greeting_only: !userName },
      ]"
    >
      <AmTypography :label="greeting" size="xxl2" weight="normal" />
      <AmTypography
        v-if="userName"
        class="am_day__user_name"
        :label="`, ${userName}`"
        size="xxl2"
        weight="normal"
        color="purple100"
      />
    </div>
    <AmTypography
      class="am_day__date"
      :label="`${dayOfWeek}, ${monthName} ${day}, ${year}`"
      weight="normal"
      color="gray80"
    />
  </div>
</template>

<script>
import "./AmDay.scss";
import AmTypography from "../../atoms/AmTypography/AmTypography.vue";

export default {
  name: "AmDay",
  props: {
    userName: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      greeting: "",
      day: "",
      dayOfWeek: "",
      month: "",
      year: "",
    };
  },
  mounted() {
    this.updateGreeting();
    this.updateDate();
    setInterval(() => {
      this.updateGreeting();
      this.updateDate();
    }, 60000);
  },
  computed: {
    monthName() {
      return this.getMonthName(this.month);
    },
  },
  methods: {
    updateGreeting() {
      const hour = new Date().getHours();
      if (hour >= 6 && hour < 12) {
        this.greeting = "Good morning";
      } else if (hour >= 12 && hour < 18) {
        this.greeting = "Good afternoon";
      } else {
        this.greeting = "Good evening";
      }
    },
    updateDate() {
      const date = new Date();
      this.day = date.getDate();
      this.dayOfWeek = this.getDayOfWeek(date.getDay());
      this.month = date.getMonth() + 1;
      this.year = date.getFullYear();
    },
    getMonthName(monthNumber) {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return monthNames[monthNumber - 1];
    },
    getDayOfWeek(dayNumber) {
      const dayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      return dayNames[dayNumber];
    },
  },
  components: { AmTypography },
};
</script>
