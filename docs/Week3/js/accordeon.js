$(".menu-acco__title").on('click', function(e) {
    $(".menu-acco__title").parent().removeClass("menu-acco__item--active")
    $(this).parent().toggleClass("menu-acco__item--active"),
        e.preventDefault()
});

$(".team-acco__trigger").on('click', function(e) {
    $(".team-acco__trigger").parent().removeClass("team-acco__item--active")
    $(this).parent().toggleClass("team-acco__item--active"),
        e.preventDefault()
});

$(".people-list__item").on('click', function(e) {
    $(".people-list__item").removeClass("people-list__item--active")
    $(this).toggleClass("people-list__item--active"),
        e.preventDefault()
});