export function useAuth() {
  const runtimeConfig = useRuntimeConfig()

  const $user = useState<IUser>('user', undefined)

  function headers() {
    const token = JSON.parse(localStorage.getItem('token')!) as IToken

    return {
      'Authorization': token.access_token
    }
  }

  async function login(params: { email: string, password: string }) {
    const response = await fetch(`${runtimeConfig.public.apiBase}/login`, {
      method: 'POST',
      body: JSON.stringify(params)
    })
  
    const token = await response.json()
  
    localStorage.setItem('token', JSON.stringify(token))
  }

  async function register(params: { name: string, email: string, password: string }) {
    const response = await fetch(`${runtimeConfig.public.apiBase}/register`, {
      method: 'POST',
      body: JSON.stringify(params)
    })
  
    const token = await response.json()
  
    localStorage.setItem('token', JSON.stringify(token))
  }

  async function logout() {
    localStorage.removeItem('token')
  }

  async function get_auth_user(): Promise<IUser|undefined> {
    try {
      const response = await fetch(`${runtimeConfig.public.apiBase}/user`, {
        method: 'POST',
        headers: headers(),
      })
      
      return await response.json() as IUser
    }
  
    catch (error) {}

    return undefined
  }

  return {
    headers,
    login,
    register,
    logout,
    get_auth_user,
    $user,
  }
}