const baseUrl = 'http://127.0.0.1:8000'

const request = async({url, method, body}) => {

  const response = await fetch(`${baseUrl}${url}`, {
    method: `${method.toUpperCase()}`,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.json()
}

export const makeRequest = ({url, method = 'get', body, dispatch, reducer, mockData}) => {
  try {
    request({url: url, method: method, body: body})
        .then(response => reducer && dispatch(reducer(response)))
        .catch((err) => reducer ? dispatch(reducer(mockData)) : console.log(err))
  }
  catch (err) {
    console.error(new Error(err))
  }
}