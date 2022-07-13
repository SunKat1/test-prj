const baseUrl = ''

const request = async({url, method, body}) => {

  const response = await fetch(`${baseUrl}/${url}`, {
    method: `${method.toUpperCase()}`,
    [method !== 'get' && 'body']: JSON.stringify(body)
  })

  return response.json()
}

export const makeRequest = ({url, method = 'get', body, dispatch, reducer, mockData}) => {
  try {
    request({url: url, method: method, body: body})
        .then(response => dispatch(reducer(response.data)))
        .catch(() => dispatch(reducer(mockData)))
  }
  catch (err) {
    console.error(new Error(err))
  }
}