$(function() {

    var moveSlide = function(container, slideNum) {

    }

    $('#next').on('click', function(e) {
        e.preventDefault();

        var $this = $(this),
            container = $this.closest('.slider__conteiner'),
            items = container.find('.slides-item'),
            activeSlide = items.filter('.active'),
            firstSlide = items.filter('.first-slide'),
            reqItem = activeSlide.next(),
            reqIndex = reqItem.index(),
            list = container.find('.slider__slides'),
            duration = 500;

        if (reqItem.length) {
            firstSlide.animate({
                'margin-left': -reqIndex * 100 + '%'
            }, duration, function() {
                activeSlide.removeClass('active');
                reqItem.addClass('active');
            });
        } else {
            firstSlide.animate({
                'margin-left': 0
            }, duration, function() {
                activeSlide.removeClass('active');
                firstSlide.addClass('active');
            });
        }
    });
    $('#prev').on('click', function(e) {
        e.preventDefault();

        var $this = $(this),
            container = $this.closest('.slider__conteiner'),
            items = container.find('.slides-item'),
            itemsLength = items.length,
            activeSlide = items.filter('.active'),
            firstSlide = items.filter('.first-slide'),
            lastSlide = items.filter('.last-slide'),
            reqItem = activeSlide.prev(),
            reqIndex = reqItem.index(),
            list = container.find('.slider__slides'),
            duration = 500;

        console.log(itemsLength);

        if (reqItem.length) {
            firstSlide.animate({
                'margin-left': -reqIndex * 100 + '%'
            }, duration, function() {
                activeSlide.removeClass('active');
                reqItem.addClass('active');
            });
        } else {
            firstSlide.animate({
                'margin-left': -itemsLength * 100 + 100 + '%'
            }, duration, function() {
                activeSlide.removeClass('active');
                lastSlide.addClass('active');
            });
        }
    });


});