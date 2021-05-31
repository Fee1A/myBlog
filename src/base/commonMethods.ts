export default {
  throttle,
  debounce,
  getProperty
}

/**
 * classic debounce function
 *
 * @param fn - callback function
 * @param interval - interval between events
 * @returns -
 */
function debounce (fn: () => void, interval: number): () => void {
  let instance = 0

  function _fn (fn: () => void) {
    instance = window.setTimeout(() => {
      fn()
      instance = 0
    }, interval)
  }

  return function () {
    if (instance !== 0) {
      window.clearTimeout(instance)
    }
    _fn(fn)
  }
}

/**
 * classic throttle function
 *
 * @param fn - callback function
 * @param interval - interval between events
 * @returns - function in order to use closure of function
 */
function throttle (fn: () => void, interval: number): () => void {
  let mute = false
  function _fn (fn: () => void) {
    mute = true
    window.setTimeout(() => {
      fn()
      mute = false
    }, interval)
  }
  return function () {
    if (!mute) {
      _fn(fn)
    }
  }
}

/**
 * type safety for key
 *
 * @param obj - obj
 * @param key - key of obj
 * @returns - obj[key]
 */
function getProperty<T, K extends keyof T> (obj: T, key: K): T[K] {
  return obj[key]
}
