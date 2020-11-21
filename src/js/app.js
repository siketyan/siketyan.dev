import '../pug/index.pug';
import '../sass/app.scss';
import '../assets/**/*.*';

import $ from "jquery";
import Vivus from "vivus";

require("@fortawesome/fontawesome-free/js/all");

const $background = $("#avatar-background");
const $outline = $("#avatar-outline");
const $replay = $("#avatar-replay");

const icon = new Vivus("avatar-outline", {
    type: "oneByOne",
    onReady: () => {
        $outline.addClass("visible")
    }
}, () => {
    $background
        .addClass("animated")
        .addClass("visible");
});

$replay.click(() => {
    $background.removeClass("visible");
    icon.reset();
    icon.play();
});
