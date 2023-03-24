<template>
  <div class="loading-container" v-show="isLoading">
    <div v-if="loadingType === 'spinner'" class="loading-spinner"></div>
    <div v-if="loadingType === 'dots'" class="loading-dots">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div v-if="loadingType === 'beats'" class="loading-beats">
      <div class="loading-beats-bar"></div>
      <div class="loading-beats-bar"></div>
      <div class="loading-beats-bar"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AmLoading",
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
    loadingType: {
      type: String,
      default: "spinner",
      validator: function (value) {
        return ["spinner", "dots", "beats"].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.loading-container {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-spinner {
  border: 6px solid #e5e7eb;
  border-top: 6px solid #1c64f2;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

.loading-dots {
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-dots div {
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: #1c64f2;
  animation: bounce 0.5s ease-in-out alternate infinite;
}

.loading-dots div:nth-child(1) {
  animation-delay: 0s;
}

.loading-dots div:nth-child(2) {
  animation-delay: 0.1s;
}

.loading-dots div:nth-child(3) {
  animation-delay: 0.2s;
}

.loading-beats {
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-beats-bar {
  width: 5px;
  height: 15px;
  margin: 0 5px;
  background-color: #1c64f2;
  animation: beat 0.2s ease-in-out infinite alternate;
}

.loading-beats-bar:nth-child(1) {
  animation-delay: 0s;
}

.loading-beats-bar:nth-child(2) {
  animation-delay: 0.1s;
}

.loading-beats-bar:nth-child(3) {
  animation-delay: 0.2s;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes bounce {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.5);
  }
}

@keyframes beat {
  from {
    transform: scaleY(1);
  }

  to {
    transform: scaleY(0.3);
  }
}
</style>
