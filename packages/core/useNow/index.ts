import { Pausable, useIntervalFn } from '@vueuse/shared'
import { Ref, ref } from 'vue-demi'
import { useRafFn } from '../useRafFn'

export interface UseNowOptions<Controls extends boolean> {
  /**
   * Expose more controls
   *
   * @default false
   */
  controls?: Controls

  /**
   * Update interval, or use requestAnimationFrame
   *
   * @default requestAnimationFrame
   */
  interval?: 'requestAnimationFrame' | number
}

/**
 * Reactive current Date instance.
 *
 * @see https://vueuse.org/useNow
 * @param options
 */
export function useNow(options?: UseNowOptions<false>): Ref<Date>
export function useNow(options: UseNowOptions<true>): { now: Ref<Date> } & Pausable
export function useNow(options: UseNowOptions<boolean> = {}) {
  const {
    controls: exposeControls = false,
    interval = 'requestAnimationFrame',
  } = options

  const now = ref(new Date())

  const update = () => now.value = new Date()

  const controls: Pausable = interval === 'requestAnimationFrame'
    ? useRafFn(update, { immediate: true })
    : useIntervalFn(update, interval, true)

  if (exposeControls) {
    return {
      now,
      ...controls,
    }
  }
  else {
    return now
  }
}
