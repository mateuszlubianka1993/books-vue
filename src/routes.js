import HomePage from './components/HomePage.vue';
import BestDetails from './components/BestDetails.vue';

export const routes = [
    { path: '', component: HomePage },
    {
        path: '/book-details/:title',
        component: BestDetails,
        props: true
    }
];