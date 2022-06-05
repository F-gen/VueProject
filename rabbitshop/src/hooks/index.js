// 提供服用的函数
import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'
export const useLazyData = (apiFn) => {
  const result = ref([])
  const target = ref(null)
  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }], observerElement) => {
      // isIntersecting 是进入可视区
      if (isIntersecting) {
        stop()
        apiFn().then(date => {
          result.value = date.result
        })
      }
    },
    {
      threshold: 0
    }
  )
  return { result, target }
}
