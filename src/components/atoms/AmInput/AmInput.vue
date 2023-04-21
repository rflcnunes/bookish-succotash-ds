<template>
  <div class="am-input">
    <AmTypography
      :label="label"
      weight="medium"
      color="black"
      class="am-input__label"
    />
    <div :class="['am-input__container', `am-input__container--${size}`]">
      <input
        :type="type === 'password' && showPassword ? 'text' : type"
        :id="name"
        :name="name"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
        class="am-input__field"
      />
      <span
        v-if="type === 'password'"
        class="am-input__icon"
        @click="showPassword = !showPassword"
      >
        <i :class="['material-icons']">{{
          showPassword ? "visibility_off" : "visibility"
        }}</i>
      </span>
      <span v-if="icon" class="am-input__icon">
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
  components: { AmTypography },
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
        ["xs", "sm", "md", "lg", "xl", "xxl", "fullWidth"].includes(value),
    },
  },
  data() {
    return {
      showPassword: false,
    };
  },
};
</script>
