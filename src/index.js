import Example from "./scripts/main";
import Map from "./scripts/map";
document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    new Example(main);

    const canvas = document.getElementById("mapCanvas");

    new Map (canvas);
});

