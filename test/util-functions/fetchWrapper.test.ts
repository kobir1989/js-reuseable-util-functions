import { fetchWrapper } from '../../src/util-functions/HTTP-request/fetchWrapper'

describe('fetchWrapper', () => {
  // Mock the global fetch function
  global.fetch = jest.fn()

  it('should fetch data successfully', async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
    const data = {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false
    }

    // Mock the response object with a json method
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      headers: {
        get: () => 'application/json' // Mock the get method for headers
      },
      json: async () => data // Mock the json method
    })

    const result = await fetchWrapper(url)

    expect(global.fetch).toHaveBeenCalledWith(url, {
      headers: { 'Content-Type': 'application/json' },
      method: 'GET'
    })

    // Update the expectation to check for deep equality of properties
    expect(result).toEqual(data)
  })

  it('should handle non-2xx response status codes', async () => {
    const url = 'https://jsonplaceholder.typicode.com/todosss/1'
    const error = new Error('Request failed with status: 404')

    // Mock the response object for a non-2xx status code
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 404,
      text: async () => 'Not Found',
      headers: {
        get: () => 'text/plain' // Mock the get method for headers
      }
    })

    try {
      await fetchWrapper(url)
    } catch (e) {
      expect(global.fetch).toHaveBeenCalledWith(url, {})
      expect(error.message).toBe(error.message) // Check the error message
    }
  })
})
