export default {
    '/search': {
        modal: () => import('./modal'),
        reducers: () => import('./reducers'),
        component: () => import('./view')
    }
};
