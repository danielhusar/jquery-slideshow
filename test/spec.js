var assert = chai.assert;

describe('Slideshow', function () {

  var $slideshow = window.slideshow('.slideshow');

  function eventFire (el, etype) {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }

  it('Init should work', function () {
    assert(!$slideshow.querySelector('.item-1').classList.contains('hidden'));
    assert($slideshow.querySelector('.item-2').classList.contains('hidden'));
    assert($slideshow.querySelector('.item-3').classList.contains('hidden'));
    assert($slideshow.querySelector('.item-4').classList.contains('hidden'));
    assert($slideshow.classList.contains('first-item'));
    assert(!$slideshow.classList.contains('last-item'));
  });

  it('Navigation forward works', function () {
    var $next = $slideshow.querySelector('.next');

    eventFire($next, 'click');

    assert($slideshow.querySelector('.item-1').classList.contains('hidden'));
    assert(!$slideshow.querySelector('.item-2').classList.contains('hidden'));
    assert($slideshow.querySelector('.item-3').classList.contains('hidden'));
    assert($slideshow.querySelector('.item-4').classList.contains('hidden'));

    eventFire($next, 'click');
    eventFire($next, 'click');

    assert($slideshow.querySelector('.item-1').classList.contains('hidden'));
    assert($slideshow.querySelector('.item-2').classList.contains('hidden'));
    assert($slideshow.querySelector('.item-3').classList.contains('hidden'));
    assert(!$slideshow.querySelector('.item-4').classList.contains('hidden'));

    eventFire($next, 'click');

    assert($slideshow.querySelector('.item-1').classList.contains('hidden'));
    assert($slideshow.querySelector('.item-2').classList.contains('hidden'));
    assert($slideshow.querySelector('.item-3').classList.contains('hidden'));
    assert(!$slideshow.querySelector('.item-4').classList.contains('hidden'));
  });

  it('Navigation backwards works', function () {
    var $prev = $slideshow.querySelector('.prev');

    eventFire($prev, 'click');

    assert($slideshow.querySelector('.item-1').classList.contains('hidden'));
    assert($slideshow.querySelector('.item-2').classList.contains('hidden'));
    assert(!$slideshow.querySelector('.item-3').classList.contains('hidden'));
    assert($slideshow.querySelector('.item-4').classList.contains('hidden'));

    eventFire($prev, 'click');
    eventFire($prev, 'click');

    assert(!$slideshow.querySelector('.item-1').classList.contains('hidden'));
    assert($slideshow.querySelector('.item-2').classList.contains('hidden'));
    assert($slideshow.querySelector('.item-3').classList.contains('hidden'));
    assert($slideshow.querySelector('.item-4').classList.contains('hidden'));

    eventFire($prev, 'click');

    assert(!$slideshow.querySelector('.item-1').classList.contains('hidden'));
    assert($slideshow.querySelector('.item-2').classList.contains('hidden'));
    assert($slideshow.querySelector('.item-3').classList.contains('hidden'));
    assert($slideshow.querySelector('.item-4').classList.contains('hidden'));
  });

});

