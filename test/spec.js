var assert = chai.assert;

describe('Slideshow', function () {

  var $slideshow = window.slideshow('.slideshow');

  it('Init should work', function (cb) {
    assert(!$slideshow.querySelector('.item-1').classList.contains('hidden'));
    assert($slideshow.querySelector('.item-2').classList.contains('hidden'));
    assert($slideshow.querySelector('.item-3').classList.contains('hidden'));
    assert($slideshow.querySelector('.item-4').classList.contains('hidden'));
    assert($slideshow.classList.contains('first-item'));
    assert(!$slideshow.classList.contains('last-item'));
    cb();
  });

  it('Navigation forward works', function () {
    var $next = $slideshow.querySelector('.next');

    $next.click();

    assert($slideshow.querySelector('.item-1').classList.contains('hidden'));
    assert(!$slideshow.querySelector('.item-2').classList.contains('hidden'));
    assert($slideshow.querySelector('.item-3').classList.contains('hidden'));
    assert($slideshow.querySelector('.item-4').classList.contains('hidden'));

    $next.click();
    $next.click();

    assert($slideshow.querySelector('.item-1').classList.contains('hidden'));
    assert($slideshow.querySelector('.item-2').classList.contains('hidden'));
    assert($slideshow.querySelector('.item-3').classList.contains('hidden'));
    assert(!$slideshow.querySelector('.item-4').classList.contains('hidden'));

    $next.click();

    assert($slideshow.querySelector('.item-1').classList.contains('hidden'));
    assert($slideshow.querySelector('.item-2').classList.contains('hidden'));
    assert($slideshow.querySelector('.item-3').classList.contains('hidden'));
    assert(!$slideshow.querySelector('.item-4').classList.contains('hidden'));
  });

  it('Navigation backwards works', function () {
    var $prev = $slideshow.querySelector('.prev');

    $prev.click();

    assert($slideshow.querySelector('.item-1').classList.contains('hidden'));
    assert($slideshow.querySelector('.item-2').classList.contains('hidden'));
    assert(!$slideshow.querySelector('.item-3').classList.contains('hidden'));
    assert($slideshow.querySelector('.item-4').classList.contains('hidden'));

    $prev.click();
    $prev.click();

    assert(!$slideshow.querySelector('.item-1').classList.contains('hidden'));
    assert($slideshow.querySelector('.item-2').classList.contains('hidden'));
    assert($slideshow.querySelector('.item-3').classList.contains('hidden'));
    assert($slideshow.querySelector('.item-4').classList.contains('hidden'));

    $prev.click();

    assert(!$slideshow.querySelector('.item-1').classList.contains('hidden'));
    assert($slideshow.querySelector('.item-2').classList.contains('hidden'));
    assert($slideshow.querySelector('.item-3').classList.contains('hidden'));
    assert($slideshow.querySelector('.item-4').classList.contains('hidden'));
  });

});

