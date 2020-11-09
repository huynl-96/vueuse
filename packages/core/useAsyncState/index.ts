import { ref } from 'vue-demi'
import { useTimeoutFn } from '@vueuse/shared'

/**
 * Reactive async state. Will not block your setup function and will triggers changes once the promise is ready.
 *
 * @param promise         The promise / async function to be resolved
 * @param initialState    The initial state, used until the first evaluation finishes
 * @param delay           Delay (ms)
 * @param catchFn         Error handling callback
 */
export function useAsyncState<T>(
  promise: Promise<T>,
  initialState: T,
  delay = 0,
  catchFn = (e: Error) => {},
) {
  const state = ref(initialState)
  const ready = ref(false)

  function run() {
    promise
      .then((data) => {
        // @ts-ignore
        state.value = data
        ready.value = true
      })
      .catch(catchFn)
  }

  if (!delay)
    run()
  else
    useTimeoutFn(run, delay)

  return { state, ready }
}
