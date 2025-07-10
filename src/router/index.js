import { createRouter, createWebHashHistory } from 'vue-router';
import CharacterProfile from '@/components/CharacterProfile.vue';
import JournalView from '@/components/JournalView.vue';
import BookList from '@/components/BookList.vue';
import JournalPublicView from '@/components/JournalPublicView.vue';

const routes = [
  {
    path: '/',
    name: 'CharacterProfile',
    component: CharacterProfile,
  },
  {
    path: '/journal',
    name: 'JournalView',
    component: JournalView,
  },
  {
      path: '/journal/view',
      name: 'JournalPublicView',
      component: JournalPublicView,
    },
  {
    path: '/books', // ✅ New route for the BookList
    name: 'BookList',
    component: BookList,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
