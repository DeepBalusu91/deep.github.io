<template>
  <section class="book-list">
    <h2>📚 My Insights on Books</h2>

    <div
      class="book-card"
      v-for="(book, index) in books"
      :key="index"
      @click="toggle(index)"
    >
      <h3>{{ book.title }}</h3>
      <transition name="fade">
        <p v-if="expandedIndex === index" class="summary">{{ book.summary }}</p>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BookList',
  data() {
    return {
      books: [
        {
          title: "Girl with the Dragon Tattoo (Steigg Larson)",
          summary: "This is probably the first book in recent years that took me back to reading again. Stieg Larsson is such a great writer\n" +
          "and he masterfully depicts the journey of Mikael Blomkvist, a Millenium reporter who gets into an investigation contract\n" +
          "he couldn't refuse, given his circumstances and Lisbeth Salander, troubled but intriguing and fascinating, and how they\n" +
          "get into the Vanger family, and uncover the family mystery. The book makes you feel like you live on that island and journeying\n" +
          "with the protagonists and exploring the world, having conversations with the Vanger family, and at the same time uncovering\n" +
          "the mystery.",
        },
        {
          title: "The Silent Patient (Alex Michaelides)",
          summary:
            "I bought this book when I was in Rhode Island in a book fare. I started reading it on my return flight\n" +
            "to Dallas, and I couldn't believe I binge-read the entire book in a day or two. This is definitely a page turner\n" +
            "and the best psychological thrillers I have read (I don't read these genres much). This is about Alicia Berenson, a famous painter\n" +
            "(don't want to reveal more), and this book deals about the professional yet obsessive bond between her and her therapist Theo Faber.\n" +
            "The more you read the more you feel astonished, but the ending is the best of all, breath-stopping, to put it in a word."
        },
      ],
      expandedIndex: null,
    };
  },
  methods: {
    toggle(index) {
      this.expandedIndex = this.expandedIndex === index ? null : index;
    },
  },
};
</script>

<style scoped>
.book-list {
  padding: 3rem 2rem;
  background: #e6f5e9 url('https://www.transparenttextures.com/patterns/book-cover.png');
  background-repeat: repeat;
  color: #2f3e46;
  border-radius: 20px;
  max-width: 1000px;
  margin: 3rem auto;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  text-align: center;
}

.book-list h2 {
  color: #52796f;
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  text-shadow: 1px 1px #ffffff;
}

.book-card {
  background-color: #ffffffcc;
  border-left: 6px solid #84a98c;
  margin-bottom: 1.5rem;
  padding: 1.2rem 1.8rem;
  border-radius: 12px;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
}

.book-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
}

.book-card h3 {
  color: #354f52;
  font-size: 1.4rem;
  margin-bottom: 0.3rem;
}

.summary {
  color: #2f3e46;
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 0.8rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
