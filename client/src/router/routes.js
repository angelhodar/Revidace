
const routes = [
  {
    path: '/',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: 'exercises', component: () => import('pages/Exercises.vue') }
    ]
  },
  {
    path: '/auth',
    component: () => import('pages/Auth.vue'),
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error.vue')
  })
}

export default routes
