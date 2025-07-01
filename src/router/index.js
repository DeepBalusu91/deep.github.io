import { createRouter, createWebHistory } from 'vue-router';
import CharacterProfile from '@/components/CharacterProfile.vue';
import JournalView from '@/components/JournalView.vue';

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
