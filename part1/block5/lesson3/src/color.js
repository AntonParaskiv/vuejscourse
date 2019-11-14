export default {
  bind(el, bindings, vnode) {
    console.log('bind');
    el.style.color = 'blue';
  },

  inserted(el, bindings, vnode) {
    console.log('inserted');
  },

  update(el, bindings, vnode, oldVnode) {
    console.log('update');
  },

  componentUpdated(el, bindings, vnode, oldVnode) {
    console.log('component updated');
  },

  unbind() {
    console.log('unbind');
  },

}
