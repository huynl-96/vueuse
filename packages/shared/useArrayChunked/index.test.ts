import { ref } from 'vue-demi'
import { useArrayChunked } from './index'

describe('useArrayChunked', () => {
  it('should be defined', () => {
    expect(useArrayChunked).toBeDefined()
  })

  describe('with non-reactive chunk-size', () => {
    it('should work with array of refs', () => {
      const item1 = ref(0)
      const item2 = ref(2)
      const item3 = ref(4)
      const item4 = ref(6)
      const item5 = ref(8)
      const list = [item1, item2, item3, item4, item5]
      const result = useArrayChunked(list, 2)
      expect(result.value).toStrictEqual([[item1, item2], [item3, item4], [item5]])
    })

    it('should work with reactive array', () => {
      const list = ref([0, 2, 4, 6, 8])
      const result = useArrayChunked(list, 2)
      expect(result.value).toEqual([[0, 2], [4, 6], [8]])
    })
  })

  describe('with reactive chunk-size', () => {
    it('should work with array of refs', () => {
      const item1 = ref(0)
      const item2 = ref(2)
      const item3 = ref(4)
      const item4 = ref(6)
      const item5 = ref(8)
      const list = [item1, item2, item3, item4, item5]
      const size = ref(2)

      const result = useArrayChunked(list, size)
      expect(result.value).toStrictEqual([[item1, item2], [item3, item4], [item5]])
      size.value = 3
      expect(result.value).toStrictEqual([[item1, item2, item3], [item4, item5]])
    })

    it('should work with reactive array', () => {
      const list = ref([0, 2, 4, 6, 8])
      const size = ref(2)
      const result = useArrayChunked(list, size)
      expect(result.value).toEqual([[0, 2], [4, 6], [8]])
      size.value = 3
      expect(result.value).toEqual([[0, 2, 4], [6, 8]])
    })
  })
})
