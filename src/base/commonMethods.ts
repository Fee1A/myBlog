export default {
  throttle,
  debounce
}

// 防抖
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

// 节流
function throttle (fn: () => void, interval: number): () => void {
  let instance = 0,
  mute = false
  function _fn (fn: () => void) {
    mute = true
    instance = window.setTimeout(() => {
      fn()
      mute = false
    }, interval)
  }
  return function () {
    if (!mute) {
      _fn (fn)
    }
  }
}
