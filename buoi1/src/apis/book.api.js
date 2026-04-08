import { apiDefault } from '.'
import { ApiConstant } from '../constants/api.constants'

const bookApi = () => ({
  getBooks: async () => apiDefault.get(ApiConstant.book.getHome),
})

export const { getBooks } = bookApi()
