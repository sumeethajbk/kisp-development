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
