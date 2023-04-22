<template>
  <div class="am_time">
    <AmTypography
      class="am_time__title"
      label="Horário"
      size="md"
      weight="light"
      color="gray60"
    />
    <AmTypography
      class="am_time__timezone"
      :label="`${time.hours}h${time.minutes}min${time.seconds}s`"
      size="xl"
      weight="normal"
      color="black"
    />
  </div>
</template>

<script>
import "./AmTime.scss";
import AmTypography from "../../atoms/AmTypography/AmTypography.vue";

export default {
  name: "AmTime",
  data() {
    return {
      currentTime: "",
      time: {
        hours: "",
        minutes: "",
        seconds: "",
      },
    };
  },
  mounted() {
    setInterval(() => {
      this.currentTime = this.getCurrentTime();
    }, 1000);
  },
  methods: {
    getCurrentTime() {
      const now = new Date();
      const hours = this.formatTime(now.getHours());
      const minutes = this.formatTime(now.getMinutes());
      const seconds = this.formatTime(now.getSeconds());

      this.time = { hours, minutes, seconds };

      return `${hours}:${minutes}:${seconds}`;
    },
    formatTime(time) {
      return time < 10 ? `0${time}` : time;
    },
  },
  components: { AmTypography },
};
</script>
