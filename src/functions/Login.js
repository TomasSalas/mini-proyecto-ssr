export const Login = async (params) => {
  const response = await fetch('http://rec-staging.recemed.cl/api/users/log_in', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })

  const result = await response.json()

  if (result.errors) {
    return {
      error: true,
      message: result.errors.detail,
      info: null
    }
  } else {
    return {
      error: false,
      message: 'Login OK',
      info: result
    }
  }
}
