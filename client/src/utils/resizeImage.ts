export const resizeImage = (image: HTMLElement | null) => {
    const width = window.innerWidth;

    if (image) {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            document.body.classList.add('nav-shadow');

            if (width < 768) {
                image.style.height = '70px';
                image.style.width = '165px';
            } else {
                image.style.height = '80px';
                image.style.width = '185px';
            }

            image.style.transition = '0.4s';
        } else if (width < 768) {
            image.style.height = '85px';
            image.style.width = '200px';
            document.body.classList.remove('nav-shadow');
        } else {
            image.style.height = '110px';
            image.style.width = '258px';
            document.body.classList.remove('nav-shadow');
        }
    }

    return image;
};
