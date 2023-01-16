---
category: Array
---

# useArrayChunked

Reactively chunk an array into smaller arrays of a specified size

## Usage

### Use with array of multiple refs

```js
import { useArraySome } from '@vueuse/core'
const item1 = ref(0)
const item2 = ref(2)
const item3 = ref(4)
const item4 = ref(6)
const item5 = ref(8)
const list = [item1, item2, item3, item4, item5]
const result = useArrayChunked(list, 2)
// result.value: [[item1, item2], [item3, item4], [item5]]
```

### Use with reactive array

```js
import { useArraySome } from '@vueuse/core'
const list = ref([0, 2, 4, 6, 8])
const size = ref(2)
const result = useArrayChunked(list, size)
// result.value: [[0, 2], [4, 6], [8]]
size.value = 3
// result.value: [[0, 2, 4], [6, 8]]
```
