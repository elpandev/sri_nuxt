export function useInvoice() {
  const runtimeConfig = useRuntimeConfig()
  const { headers } = useAuth()

  async function get_invoice({ id }: { id: string }) {
    const response = await fetch(`${runtimeConfig.public.apiBase}/invoices/${id}`, {
      method: 'GET',
      headers: headers(),
    })
  
    return await response.json() as IInvoice
  }

  return {
    get_invoice,
  }
}
