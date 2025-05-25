<<<<<<< HEAD
jQuery(document).ready(function () {
new Sticksy.initializeAll(
        '.sticky-widget',
        {
          topSpacing: 100,
          listen: true,
        },
        true
      );
      stickyEl.onStateChanged = function (state) {
    if (state === 'fixed') stickyEl.nodeRef.classList.add('widget--fixed')
    else stickyEl.nodeRef.classList.remove('widget--fixed')
}
});
=======
var sticky = new Sticky(".sticky-widget");
>>>>>>> 0b982745afde5a16e83981eb4f882bcfd1dd68c6
