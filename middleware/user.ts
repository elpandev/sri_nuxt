export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log('middleware => user')

  const { $user, get_auth_user } = useAuth()

  if ($user.value === undefined) {
    const user = await get_auth_user()

    if (user === undefined) {
      return navigateTo('/auth/login')
    }

    $user.value = user
  }
})
