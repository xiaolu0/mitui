import user from './components/user.vue';
import find from './components/find.vue';
import order from './components/order.vue';
import takeout from './components/takeout.vue';
const  routes=[
    {path:"/user",component:user},
    {path:"/find",component:find},
    {path:"/order",component:order},
    {path:"/takeout",component:takeout}
];
export default routes