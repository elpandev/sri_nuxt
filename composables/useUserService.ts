export function useUserService() {
  const runtimeConfig = useRuntimeConfig()

  async function update(user: IUser) {
    await fetch(`${runtimeConfig.public.apiBase}/users/${user.email}`, {
      method: 'PUT',
      body: JSON.stringify(user)
    })
  }

  return {
    update,
  }
}