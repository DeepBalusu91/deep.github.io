<template>
  <b-card
    class="mb-3 shadow-sm"
    border-variant="primary"
    bg-variant="light"
    text-variant="dark"
  >
    <h4 class="text-primary mb-2">{{ title }}</h4>
    <p class="text-muted" style="white-space: pre-line;">
      {{ summary }}
    </p>
  </b-card>
</template>

<script>
export default {
  name: "BookCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
h4 {
  font-weight: bold;
}
</style>
