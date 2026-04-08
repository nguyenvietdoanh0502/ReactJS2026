import { apiDefault } from '.'
import { ApiConstant } from '../constants/api.constants'

const blockApi = () => ({
  getBlock: async () => apiDefault.get(ApiConstant.block.getBlock,{
    params: {
      limit: 20,
      sort: 'top_seller',
      page: 1,
      urlKey: 'thoi-trang-nam',
      category: 915,
    },
  }),
})

export const { getBlock } = blockApi()