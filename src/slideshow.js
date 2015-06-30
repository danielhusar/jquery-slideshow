(function (window, document, undefined) {
  'use strict';

  window.slideshow = function (wrap, current, opts) {
    opts = opts || {};

    var $wrap = document.querySelector(wrap);
    var $items = $wrap.querySelectorAll(opts.itemClass || '.item');
    var $prev = $wrap.querySelectorAll(opts.itemClass || '.prev');
    var $next = $wrap.querySelectorAll(opts.itemClass || '.next');
    var hidden = opts.hiddenClass || 'hidden';
    var max = $items.length;
    current = current === undefined ? 1 : current;

    forEach($prev, function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        if (current - 1 > 0) {
          goTo(current - 1);
        }
      });
    });

    forEach($next, function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        if (current + 1 <= max) {
          goTo(current + 1);
        }
      });
    });

    function goTo (slide) {
      current = slide;

      forEach($items, function (el, index) {
        if (++index !== slide) {
          el.classList.add(hidden);
        } else {
          el.classList.remove(hidden);
        }
      });

      if ( current === 1) {
        $wrap.classList.add('first-item');
      } else {
        $wrap.classList.remove('first-item');
      }

      if ( current === max) {
        $wrap.classList.add('last-item');
      } else {
        $wrap.classList.remove('last-item');
      }
    }

    function forEach (selector, cb) {
      return [].forEach.call(selector, cb);
    }

    goTo(current);
    return $wrap;
  };

}(this, this.document));
