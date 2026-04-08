import { apiDefault } from '.'
import { ApiConstant } from '../constants/api.constants'

const productApi = () => ({
  getProducts: async () => apiDefault.get(ApiConstant.product.getProduct),
})

export const { getProducts } = productApi()
