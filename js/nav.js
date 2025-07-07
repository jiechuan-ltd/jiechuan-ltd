document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const nav = document.querySelector('header>div');

    const onScroll = () => {
        const y = window.scrollY;
        
        if (y > 500) {
            header.classList.remove('lg:px-6', 'lg:py-0', 'lg:h-0');
            nav.classList.remove('lg:shadow', 'lg:my-0', 'lg:relative');
        } else {
            header.classList.add('lg:px-6', 'lg:py-0', 'lg:h-0');
            nav.classList.add('lg:shadow', 'lg:my-0', 'lg:relative');
        }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
});