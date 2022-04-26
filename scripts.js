import {
    scroll_bottom,
    scroll_position,
    slide_set
} from './scripts/scrolling.js';


history.scrollRestoration = "manual";
window.onload = scroll_bottom();
scroll_position();
slide_set();