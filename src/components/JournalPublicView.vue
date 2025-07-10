<template>
  <div class="journal-bg min-vh-100 py-5 d-flex align-items-center">
    <div class="overlay w-100 h-100 position-absolute top-0 start-0"></div>

    <b-container
      class="bg-white bg-opacity-75 rounded-4 shadow-lg p-4 mx-auto position-relative"
      style="max-width: 700px; z-index: 2;"
    >
      <h1 class="text-success text-center mb-3">🌿 Public Journal View</h1>

      <p class="text-muted text-center mb-4 fst-italic" style="font-size: 0.95rem;">
        🧪 This is a personal experimental journal app, built during my free time as a way to explore and learn
        modern web technologies. The entries shared here reflect moments from my daily life — please enjoy them
        respectfully, knowing that this space is meant more for creativity and learning than deep introspection.
      </p>

      <div v-if="loading" class="text-center text-muted fw-semibold py-5">
        Loading journal entries...
      </div>

      <div v-else-if="entries.length">
        <b-card
          v-for="(entry, index) in entries"
          :key="entry.entryId || index"
          class="mb-3 bg-light bg-opacity-75"
          border-variant="success"
          text-variant="dark"
        >
          <small class="text-muted mb-2 d-block" style="font-family: monospace;">
            {{ formatDate(entry.createdAt) }}
          </small>
          <p style="white-space: pre-line;">{{ entry.text }}</p>
        </b-card>
      </div>

      <div v-else class="text-center text-muted fw-semibold py-5">
        No public journal entries available.
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "JournalPublicView",
  data() {
    return {
      entries: [],
      loading: true,
    };
  },
  async mounted() {
    try {
      const res = await fetch("https://7oextb26ybeuoptz5f355jqphq0zjhva.lambda-url.us-east-1.on.aws");
      const data = await res.json();
      if (Array.isArray(data)) {
        this.entries = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      } else {
        this.entries = [];
      }
    } catch (err) {
      console.error("Public view fetch error:", err);
      this.entries = [];
    } finally {
      this.loading = false;
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      });
    },
  },
};
</script>

<style scoped>
.journal-bg {
  background-image: url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=80');
  background-size: cover;
  background-position: center;
  position: relative;
}

.overlay {
  background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.4));
  backdrop-filter: blur(2px);
}
</style>
