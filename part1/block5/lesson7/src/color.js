export default {
  bind(el, bindings, vnode) {
    const delayModifier = bindings.modifiers['delay'];
    let delay = 0;

    if (delayModifier) {
      delay = 2000;
    }

    setTimeout(() => {
      const fontModifier = bindings.modifiers['font'];
      if (fontModifier) {
        el.style.fontSize = '30px';
      }

      const arg = bindings.arg;
      el.style[arg] = bindings.value;
    }, delay);
  },

}
