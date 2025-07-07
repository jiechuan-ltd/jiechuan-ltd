document.addEventListener('DOMContentLoaded', () => {

    const groups = [...document.querySelectorAll('[id^="line-group-"]')];
    const played = new Set();
    const playLines = (group) => {
        group.querySelectorAll('div').forEach(line => {
            const delay = line.dataset.delay || 0;
            line.style.animationDelay = `${delay}ms`;
            line.classList.add('animate-slide-in');
        });
        played.add(group);
    };

    const onScrollAnimate = () => {
        const y = window.scrollY;
        groups.forEach(group => {
            const rect = group.getBoundingClientRect();
            const top = rect.top;
            if (played.has(group)) return;
            if (rect.top < window.innerHeight && rect.bottom > 0) playLines(group);
        });

    };

    window.addEventListener('scroll', onScrollAnimate, { passive: true });
    onScrollAnimate();
})