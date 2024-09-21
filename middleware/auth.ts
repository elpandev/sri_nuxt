export default defineNuxtRouteMiddleware((to, from) => {
  console.log('middleware => auth')

  if (localStorage.getItem('token') === null) {
    return navigateTo('/auth/login')
  }
})
