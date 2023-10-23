import axios, {AxiosError, AxiosRequestConfig} from 'axios'

const API_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
})

export const axiosBaseQuery = async (request: AxiosRequestConfig): Promise<any> => {
  try {
    const response = await instance(request)
    return {data: response.data}
  } catch (e) {
    const {response} = e as AxiosError

    if (response) {
      return {error: response.data}
    }

    throw e
  }
}

export default instance
