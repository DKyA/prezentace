
export function scroll_bottom() {
    window.scrollTo(0, document.body.scrollHeight);
}


const total_height = (() => {
    let body = document.body,
    html = document.documentElement;

    let height = Math.max( body.scrollHeight, body.offsetHeight, 
    html.clientHeight, html.scrollHeight, html.offsetHeight);

    return height
})();


export function scroll_position() {

    const bar = document.querySelector('#js_progress_val');
    const initial = window.scrollY


    window.addEventListener("scroll", () => {

        let progress = 1.5 + ((1 - (window.scrollY / initial)) * 71);
        bar.style.height = progress + '%';

    });

}


export function slide_set() {
    // Good luck :-) You can do it

    let viewport_height = (() => {return window.innerHeight});
    const total_slides = Math.ceil(total_height / viewport_height())
    const labels = document.querySelectorAll(".c-progress__period");

    window.addEventListener("keydown", (event) => {

        let current_slide = (() => {
            return Math.floor(1 + (window.scrollY / viewport_height()))
        });

        if (event.key == 'Enter') {

            window.scrollTo({top: (current_slide()-2) * viewport_height(), behavior: 'smooth'});

            if (!labels[current_slide()].classList.contains('c-progress__period--active')) {
                for (let i = total_slides + 1; i > current_slide(); i--) {
                    labels[i - 1].classList.add('c-progress__period--active');
                }
                if (current_slide() + 1 < 4) {
                    for (let i = 4; i >= 0; i--) {
                        labels[i].classList.add('c-progress__period--active');
                    }
                }
            }

        }

        if (event.key == 'Shift') {

            window.scrollTo({top: (current_slide()) * viewport_height(), behavior: 'smooth'});

            if (labels[current_slide() + 1].classList.contains('c-progress__period--active')) {
                for (let i = 0; i < current_slide()+1; i++) {
                    if (current_slide() > 5) {
                        continue
                    }
                    labels[i+1].classList.remove('c-progress__period--active');
                }
                if (current_slide() + 1 < 4) {
                    for (let i = 2; i >= 0; i--) {
                        labels[i].classList.remove('c-progress__period--active');
                    }
                }
            }

        }

    }, true);

}
