/**
 * Plugin to toggle window scroll on and off.
 */
export default ({ app }, inject) => {
  inject('toggleScroll', (disabled) => {
    if (!document) { return }

    const htmlEl = document.querySelector('html')
    if (!htmlEl) { return }

    htmlEl.classList[disabled ? 'add' : 'remove']('overflow-hidden')
  })
}
