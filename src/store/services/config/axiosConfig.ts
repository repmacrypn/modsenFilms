import axios, {AxiosError, AxiosRequestConfig} from 'axios'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTYyNGUyN2M4YWJmZTAzOGExNmQ5ODgzYTNjMjE5YyIsInN1YiI6IjY1MTQ1MDg0YTE5OWE2MDBlMWZhNTNiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BvbcztnAzpmccecSOLA7rdYoqneM0rV62a-cS8mYmpU'
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
