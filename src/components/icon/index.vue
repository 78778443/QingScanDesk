<template>
  <i class="anticon">
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="`#icon-${type}`"></use>
    </svg>
  </i>
</template>
<script>
export default {
  name: 'icon',
  props: {
    type: {
      type: String,
    },
  },
  setup() {},
};
</script>
