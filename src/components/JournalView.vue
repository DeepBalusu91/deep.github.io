<template>
  <div class="journal-wrapper">
    <b-container class="journal-container">
      <h1 class="journal-title" style="user-select:none;">
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
          v-if="error"
          class="mt-2"
          dismissible
          @dismissed="error = false"
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
              <span v-if="entry.author" class="text-secondary"> — {{ entry.author }}</span>
            </small>
            <p style="white-space: pre-line;">{{ entry.text }}</p>
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
      error: false,
    };
  },
  mounted() {
    // Try to load entries from localStorage as a fallback
    const saved = localStorage.getItem("journalEntries");
    if (saved) {
      this.entries = JSON.parse(saved).map(e => ({
        ...e,
        date: new Date(e.date)
      }));
    }
  },
  methods: {
    async addEntry() {
      if (!this.newEntry.trim()) return;

      const entryPayload = {
        text: this.newEntry.trim(),
        author: "Deep"
      };

      try {
        const response = await fetch("https://7oextb26ybeuoptz5f355jqphq0zjhva.lambda-url.us-east-1.on.aws/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(entryPayload),
        });

        if (response.ok) {
          const newLog = {
            text: entryPayload.text,
            date: new Date(),
            author: entryPayload.author
          };
          this.entries.unshift(newLog);
          this.newEntry = "";
          localStorage.setItem("journalEntries", JSON.stringify(this.entries));
        } else {
          const errorData = await response.json();
          alert("Failed to save entry: " + (errorData.error || "Unknown error"));
        }
      } catch (error) {
        console.error("Error saving entry:", error);
        alert("Error saving entry. Please try again.");
      }
    },

    async fetchEntries() {
      try {
        const res = await fetch("https://7oextb26ybeuoptz5f355jqphq0zjhva.lambda-url.us-east-1.on.aws/");
        if (res.ok) {
          const data = await res.json();
          this.entries = data
            .map(e => ({
              text: e.text,
              date: new Date(e.createdAt),
              author: e.author || "anonymous"
            }))
            .sort((a, b) => b.date - a.date);
          localStorage.setItem("journalEntries", JSON.stringify(this.entries));
        }
      } catch (error) {
        console.error("Failed to fetch entries", error);
      }
    },

    checkPassword() {
      if (!this.passwordInput.trim()) return;

      const payload = JSON.stringify({
        passwordInput: this.passwordInput.trim(),
      });

      fetch("https://reevkfao7slsdwkianyo72vx540mtnyx.lambda-url.us-east-1.on.aws", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
      })
        .then(async (res) => {
          const data = await res.json();

          if (res.status === 200 && data.message === "Access granted") {
            this.unlocked = true;
            this.error = false;
            this.passwordInput = "";
            this.fetchEntries();
          } else {
            this.error = true;
          }
        })
        .catch(() => {
          this.error = true;
        });
    },

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
.journal-wrapper {
  position: relative;
  min-height: 100vh;
  padding: 3rem 1rem;
  background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.journal-container {
  max-width: 700px;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 1rem;
  padding: 2rem 2.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.journal-title {
  color: #2e4a1e;
  font-weight: 700;
  margin-bottom: 1.5rem;
  font-family: 'Georgia', serif;
  text-align: center;
  user-select: none;
}

.text-primary {
  color: #2e4a1e !important;
}

.b-button,
.b-form-input,
.b-form-textarea {
  border-radius: 8px !important;
}

.b-button {
  background-color: #4a7c28 !important;
  border-color: #4a7c28 !important;
  color: white !important;
  font-weight: 600;
}

.b-button:hover {
  background-color: #6da437 !important;
  border-color: #6da437 !important;
}

.b-alert {
  font-weight: 600;
}

/* monospace small date text */
small {
  font-family: monospace;
  font-size: 0.85rem;
  color: #6b8e23;
}
</style>
