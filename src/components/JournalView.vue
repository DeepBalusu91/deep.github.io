<template>
  <div class="min-vh-100 bg-light py-5">
    <b-container class="bg-white rounded-4 shadow-lg p-4 mx-auto" style="max-width: 700px;">
      <h1 class="text-primary text-center mb-4" style="user-select:none;">
        ✍️ My Online Journal
      </h1>

      <!-- PASSWORD LOCK SCREEN -->
      <div v-if="!unlocked" class="text-center">
        <b-form-group
          label="Enter Password to Unlock"
          label-for="passwordInput"
          label-class="fw-semibold text-primary"
          class="mb-3"
          label-cols-sm="12"
          label-cols-md="6"
          label-align-sm="left"
        >
          <b-form-input
            id="passwordInput"
            type="password"
            v-model="passwordInput"
            placeholder="Enter password"
            class="text-primary"
            autocomplete="off"
          ></b-form-input>
        </b-form-group>
        <b-button
          variant="primary"
          :disabled="!passwordInput || !passwordInput.trim()"
          @click="checkPassword"
          class="mb-3"
        >
          Unlock
        </b-button>
        <b-alert
          variant="danger"
          show
          v-if="errorShown"
          class="mt-2"
          dismissible
          @dismissed="errorShown = false"
        >
          Incorrect password. Please try again.
        </b-alert>
      </div>

      <!-- JOURNAL ENTRIES SCREEN -->
      <div v-else>
        <!-- Journal Entry Form -->
        <b-form @submit.prevent="addEntry" class="mb-4">
          <b-form-group
            label="New Entry"
            label-for="newEntry"
            label-class="fw-semibold text-primary"
            label-cols-sm="12"
            label-cols-md="3"
            label-align-sm="left"
          >
            <b-form-textarea
              id="newEntry"
              v-model="newEntry"
              placeholder="What's on your mind today?"
              rows="5"
              class="text-primary"
              required
            ></b-form-textarea>
          </b-form-group>
          <div class="text-end">
            <b-button type="submit" variant="primary" class="fw-semibold">
              Add Entry
            </b-button>
          </div>
        </b-form>

        <!-- Journal Entries -->
        <div v-if="entries.length">
          <b-card
            v-for="(entry, index) in entries"
            :key="index"
            class="mb-3"
            border-variant="primary"
            bg-variant="light"
            text-variant="dark"
          >
            <small class="text-muted mb-2 d-block" style="font-family: monospace;">
              {{ formatDate(entry.date) }}
            </small>

            <div v-if="editingIndex === index">
              <!-- Editing textarea -->
              <b-form-textarea
                v-model="editEntryText"
                rows="4"
                class="mb-2"
              ></b-form-textarea>
              <b-button size="sm" variant="success" @click="saveEdit(index)" class="me-2">
                Save
              </b-button>
              <b-button size="sm" variant="secondary" @click="cancelEdit">
                Cancel
              </b-button>
            </div>

            <div v-else>
              <p style="white-space: pre-line;">{{ entry.text }}</p>
              <b-button size="sm" variant="warning" class="me-2" @click="startEdit(index)">
                Edit
              </b-button>
              <b-button size="sm" variant="danger" @click="deleteEntry(index)">
                Delete
              </b-button>
            </div>
          </b-card>
        </div>

        <div v-else class="text-center text-muted fw-semibold">
          No journal entries yet.
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "JournalView",
  data() {
    return {
      newEntry: "",
      entries: [],
      passwordInput: "",
      unlocked: false,
      errorShown: false,
      editingIndex: null,
      editEntryText: "",
    };
  },
  mounted() {
    const saved = localStorage.getItem("journalEntries");
    if (saved) {
      this.entries = JSON.parse(saved);
    }
  },
  methods: {
    addEntry() {
      if (!this.newEntry.trim()) return;
      const newLog = {
        text: this.newEntry.trim(),
        date: new Date(),
      };
      this.entries.unshift(newLog);
      this.newEntry = "";
      localStorage.setItem("journalEntries", JSON.stringify(this.entries));
    },
    formatDate(date) {
      return new Date(date).toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      });
    },
    checkPassword() {
      const correctPassword = "deep1234"; // Change this to your real password
      if (this.passwordInput.trim() === correctPassword) {
        this.unlocked = true;
        this.errorShown = false;
      } else {
        this.errorShown = true;
      }
    },

    startEdit(index) {
      this.editingIndex = index;
      this.editEntryText = this.entries[index].text;
    },
    cancelEdit() {
      this.editingIndex = null;
      this.editEntryText = "";
    },
    saveEdit(index) {
      if (!this.editEntryText.trim()) return;
      this.entries[index].text = this.editEntryText.trim();
      this.editingIndex = null;
      this.editEntryText = "";
      localStorage.setItem("journalEntries", JSON.stringify(this.entries));
    },
    deleteEntry(index) {
      if (confirm("Are you sure you want to delete this entry?")) {
        this.entries.splice(index, 1);
        localStorage.setItem("journalEntries", JSON.stringify(this.entries));
      }
    },
  },
};
</script>

<style scoped>
/* Optional: smooth font rendering */
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
