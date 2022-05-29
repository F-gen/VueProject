// 分类模块
import { findAllCategory } from '@/api/category'
import { topCategory } from '@/api/constants'
export default {
  namespaced: true,
  state() {
    return {
      // 分类信息集合
      list: topCategory.map((item) => ({ name: item }))
    }
  },
  mutations: {
    setList(state, payload) {
      state.list = payload
    },
    show(state, id) {
      const currentCategory = state.list.find(item => item.id === id)
      currentCategory.open = true
    },
    hidden(state, id) {
      const currentCategory = state.list.find(item => item.id === id)
      currentCategory.open = false
    }
  },
  actions: {
    async getList({ commit }) {
      const { result } = await findAllCategory()
      result.forEach((item) => {
        item.open = false
      })
      // 获取数据成功，提交mutations进行数据修改
      commit('setList', result)
    }
  }
}
