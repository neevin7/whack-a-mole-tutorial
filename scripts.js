function playSound() {
    const audio = new Audio("./assets/smash.mp3");
    audio.play();
}

$(window).on("mousemove", function (e) {
    //make hammer follow cursor
    $(".hammer").css({
        left: e.pageX - 60 + "px",
        top: e.pageY - 60 + "px",
    });
});

$(window).on("click", function () {
    //rotate hammer
    $(".hammer").css({
        transform: "rotate(-90deg)",
    });

    //rotate back after 100ms
    setTimeout(() => {
        $(".hammer").css({
            transform: "rotate(0deg)",
        });
    }, 100);
});

$(".hole").on("click", function () {
    const mole = $(this).find(".mole");
    const moleHit = $(this).find(".mole-hit");

    //do nothing if no mole visible or already hit
    if (mole.hasClass("hidden")) {
        return;
    }

    //play sound
    playSound();

    //hide normal mole and show hit mole
    mole.addClass("hidden");
    moleHit.removeClass("hidden");

    //hide hit mole after 500ms
    setTimeout(() => {
        moleHit.addClass("hidden");
    }, 500);
});


setInterval(() => {
    //hide all moles first
    $(".mole").addClass("hidden");
    $(".mole-hit").addClass("hidden");

    //pick random mole
    const holes = $(".hole");
    const randomIndex = Math.floor(Math.random() * holes.length);

    const randomHole = holes.eq(randomIndex);

    //show mole
    randomHole.find(".mole").removeClass("hidden");
}, 1000);