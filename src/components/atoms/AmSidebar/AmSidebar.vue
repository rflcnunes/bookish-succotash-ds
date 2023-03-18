<template>
  <div :class="{ 'am-sidebar': true, 'am-sidebar--open': isOpen }">
    <div class="am-sidebar__header">
      <slot name="logo"></slot>
      <button class="am-sidebar__toggle" @click="isOpen = !isOpen">
        <span v-if="isOpen">Close</span>
        <span v-else>Open</span>
      </button>
    </div>
    <ul class="am-sidebar__menu">
      <li v-for="item in items" :key="item.label">
        <a :href="item.url">{{ item.label }}</a>
      </li>
    </ul>
    <div class="am-sidebar__footer">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AmSidebar",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isOpen: true,
    };
  },
};
</script>

<style scoped>
.am-sidebar {
  width: 250px;
  height: 100vh;
  background-color: #fff;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-250px);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
}

.am-sidebar--open {
  transform: translateX(0);
}

.am-sidebar__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 20px;
  border-bottom: 1px solid #ddd;
  background-color: #f5f5f5;
}

.am-sidebar__toggle {
  background-color: transparent;
  border: none;
  color: #333;
  font-size: 20px;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
}

.am-sidebar__toggle:hover {
  color: #666;
}

.am-sidebar__menu {
  margin: 20px 0;
  padding: 0;
  list-style: none;
}

.am-sidebar__menu li {
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
  transition: background-color 0.2s ease-in-out;
}

.am-sidebar__menu li:last-child {
  border-bottom: none;
}

.am-sidebar__menu li:hover {
  background-color: #f5f5f5;
}

.am-sidebar__footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
}
</style>
