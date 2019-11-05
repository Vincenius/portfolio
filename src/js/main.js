(function () {
    const doc = document.documentElement

    doc.classList.remove('no-js')
    doc.classList.add('js')

    // Reveal animations
    if (document.body.classList.contains('has-animations')) {
        /* global ScrollReveal */
        const sr = window.sr = ScrollReveal()

        sr.reveal('.hero-title, .hero-paragraph, .hero-cta', {
            duration: 1000,
            distance: '40px',
            easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
            origin: 'bottom',
            interval: 150
        })

        sr.reveal('.feature, .pricing-table', {
            duration: 600,
            distance: '40px',
            easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
            interval: 100,
            origin: 'bottom',
            viewFactor: 0.5
        })

        sr.reveal('.feature-extended-image', {
            duration: 600,
            scale: 0.9,
            easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
            viewFactor: 0.5
        })
    }

    var headerLinks = document.querySelectorAll('.scroll-link', 0);
    addScrollListener(headerLinks)

    // escape html code in <code> tags
    document.querySelectorAll("code.html").forEach(function(element) {
        element.innerHTML = element.innerHTML.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    });
}())

function addScrollListener(elements) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function(e) {
            e.preventDefault()

            var id = this.getAttribute('data-link');
            var target = document.getElementById(id)
            animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target.offsetTop, 300, true);
        }, false);
    }
}

function animate(elem, style, unit, from, to, time, prop) {
    if (!elem) {
        return;
    }
    var start = new Date().getTime(),
        timer = setInterval(function () {
            var step = Math.min(1, (new Date().getTime() - start) / time);
            if (prop) {
                elem[style] = (from + step * (to - from))+unit;
            } else {
                elem.style[style] = (from + step * (to - from))+unit;
            }
            if (step === 1) {
                clearInterval(timer);
            }
        }, 25);
    if (prop) {
        elem[style] = from+unit;
    } else {
        elem.style[style] = from+unit;
    }
}

window.hljs.initHighlightingOnLoad();