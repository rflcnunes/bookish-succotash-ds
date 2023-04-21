<template>
  <div class="am-input">
    <AmTypography
      :label="label"
      weight="normal"
      color="black"
      class="am-input-label"
    />
    <div :class="['am-input-container', `am-input-container--${size}`]">
      <input
        :type="type === 'password' && showPassword ? 'text' : type"
        :id="name"
        :name="name"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
      <span
        v-if="type === 'password'"
        class="am-input-icon"
        @click="showPassword = !showPassword"
      >
        <i :class="['material-icons']">{{
          showPassword ? "visibility_off" : "visibility"
        }}</i>
      </span>
      <span v-if="icon" class="am-input-icon">
        <i :class="['material-icons']">{{ icon }}</i>
      </span>
    </div>
  </div>
</template>

<script>
import AmTypography from "../AmTypography/AmTypography.vue";
import "./AmInput.scss";

export default {
  name: "AmInput",
  props: {
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "md",
      validator: (value) =>
        ["xs", "sm", "md", "lg", "fullWidth"].includes(value),
    },
  },
  data() {
    return {
      showPassword: false,
    };
  },
  components: { AmTypography },
};
</script>
