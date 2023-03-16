const routes = [
  {
    path: '/',
    component: () => import('./views/profile.vue'),
    meta: { title: 'Profile Page' },
  },
  {
    path: '/login',
    component: () => import('./views/login.vue'),
    meta: { title: 'Login Page' },
  },
  {
    path: '/signup',
    component: () => import('./views/signup.vue'),
    meta: { title: 'Signup Page' },
  },
  {
    path: '/style-guide',
    component: () => import('./views/StyleGuide.vue'),
    meta: { title: 'Style Guide' },
  },
  {
    // Not Found 404
    path: '/:path(.*)',
    component: () => import('./views/NotFound.vue'),
    meta: { title: '404 Not Found' },
  },
]
export default routes
