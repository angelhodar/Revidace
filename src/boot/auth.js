export default ({ router, store }) => {
  router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    const authenticated = store.getters["auth/isAuthenticated"]
    if (requiresAuth && !authenticated) next("/login")
    else next()
  })
}
