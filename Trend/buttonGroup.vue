<template>
  <div class="button-group">
    <button
      v-for="v,i in tabs"
      :key="`${i}-${v.value}`"
      class="btn"
      :class="{ active: isActive === v.value }"
      @click="handleClick(v.value)"
      @mouseenter="handleHover(v.value)"
      @mouseleave="handleLeave(v.value)"
    >
      {{ v.label }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    chooseItem: {
      type: Function,
      default: () => {}
    },
    chooseValue: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isActive: this.chooseValue, // 记录当前激活的按钮标识
      hoverButton: null // 记录鼠标悬停的按钮标识
    }
  },
  methods: {
    handleClick(type) {
      this.isActive = type
      this.hoverButton = null
      this.$emit('chooseItem', type)
    },
    handleHover(type) {
      if (!this.isActive) {
        this.hoverButton = type
      }
    },
    handleLeave(type) {
      if (!this.isActive) {
        this.hoverButton = null
      }
    }
  }
}
</script>

  <style scoped>
  .button-group {
    display: flex;
  }
  .btn {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    background-color: #f0f0f0;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .btn:hover,
  .btn.active {
    background-color: #e0e0e0;
  }
  .btn:hover.active {
    background-color: #d0d0d0;
  }
  </style>
