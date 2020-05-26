import HomePage from './components/HomePage.vue';
import BestDetails from './components/BestDetails.vue';
import Search from './components/Search.vue';

export const routes = [
    { path: '', component: HomePage },
    {
        path: '/book-details/:title',
        component: BestDetails,
        props: true
    },
    { path: '/search', component: Search }
];