import $ from "jquery";
import Vivus from "vivus";

require("@fortawesome/fontawesome-free/js/all");

new Vivus("avatar-outline", {
    type: "oneByOne",
    onReady: () => {
        $("#avatar-outline").addClass("visible")
    }
}, () => {
    $("#avatar-background")
        .addClass("animated")
        .addClass("visible");
});