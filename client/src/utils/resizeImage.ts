import {ImageWidths, ResizeImageProps} from '../types';

export const resizeImage = (props: ResizeImageProps) => {
    const {image, windowWidth} = props;

    if (image) {
        // show the shadow under the nav
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            document.body.classList.add('nav-shadow');

            if (windowWidth < 768) {
                image.style.height = ImageWidths.xSmall.height;
                image.style.width = ImageWidths.xSmall.width;
            } else {
                image.style.height = ImageWidths.Small.height;
                image.style.width = ImageWidths.Small.width;
            }

            image.style.transition = '0.4s';
        } else if (windowWidth < 768) {
            image.style.height = ImageWidths.Medium.height;
            image.style.width = ImageWidths.Medium.width;
            document.body.classList.remove('nav-shadow');
        } else {
            image.style.height = ImageWidths.Large.height;
            image.style.width = ImageWidths.Large.width;
            document.body.classList.remove('nav-shadow');
        }
    }

    return image;
};
