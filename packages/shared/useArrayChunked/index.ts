import type { ComputedRef } from 'vue-demi'
import { computed } from 'vue-demi'
import type { MaybeComputedRef } from '../utils'
import { resolveUnref } from '../resolveUnref'

const chunk = <T>(list: T[], size: number): T[][] => list.length ? [list.slice(0, size)].concat(chunk(list.slice(size), size)) : []

/**
 * Reactively chunk an array into smaller arrays of a specified size.
 * If array can't be split equally based on the given size, the last chunk will be the remaining elements
 *
 * @see https://vueuse.org/useArrayChunked
 * @param {Array} list - the array was called upon.
 * @param size - The length of each chunk to group.
 *
 * @returns {Array} A list of grouped chunks.
 */
export function useArrayChunked<T>(
  list: MaybeComputedRef<MaybeComputedRef<T>[]>,
  size: MaybeComputedRef<number>,
): ComputedRef<MaybeComputedRef<T>[][]> {
  return computed(() => chunk(resolveUnref(list), resolveUnref(size)))
}
