import Example from "./scripts/example"
import Map from "./scripts/map"
document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    new Example(main)

    const canvas = document.getElementById("mapCanvas");
    // debugger
    new Map (canvas)
})