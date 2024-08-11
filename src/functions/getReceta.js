export const getRecetas = async (pagina, setReceta, setTotalPagina, setPaginaSiguinete) => {
  const token = localStorage.getItem('token')

  try {
    const response = await fetch(`http://rec-staging.recemed.cl/api/patients/prescriptions?page=${pagina}`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    const data = await response.json()
    setReceta(data.data)
    setTotalPagina(data.meta.total_pages)
    setPaginaSiguinete(data.meta['has_next_page?'])
  } catch (error) {
    console.error('Error fetching prescriptions:', error)
  }
}
