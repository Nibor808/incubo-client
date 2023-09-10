import React from 'react';
import {render} from '@testing-library/react';
import {resizeImage} from '../utils/resizeImage';
import {ImageWidths} from 'types';

const TestComponent = () => {
    return <img data-testid="test-image" alt="test" style={{height: 10, width: 10}} src="" />;
};

describe('resizeImage', () => {
    it('should return a Medium image', () => {
        const {height, width} = ImageWidths.Medium;
        const {getByTestId} = render(<TestComponent />);

        const image = getByTestId('test-image');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('style');
        expect(image.getAttribute('style')).toEqual('height: 10px; width: 10px;');

        resizeImage({image, windowWidth: 100});
        expect(image.getAttribute('style')).toEqual(`height: ${height}; width: ${width};`);
    });

    it('should return a Large image', () => {
        const {height, width} = ImageWidths.Large;
        const {getByTestId} = render(<TestComponent />);

        const image = getByTestId('test-image');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('style');
        expect(image.getAttribute('style')).toEqual('height: 10px; width: 10px;');

        resizeImage({image, windowWidth: 800});
        expect(image.getAttribute('style')).toEqual(`height: ${height}; width: ${width};`);
    });

    it('should return an xSmall Image if scolling on a screen < 786px', () => {
        const {height, width} = ImageWidths.xSmall;
        const {getByTestId} = render(<TestComponent />);

        const image = getByTestId('test-image');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('style');
        expect(image.getAttribute('style')).toEqual('height: 10px; width: 10px;');

        document.body.scrollTop = 50;

        resizeImage({image, windowWidth: 100});
        expect(image.getAttribute('style')).toEqual(
            `height: ${height}; width: ${width}; transition: 0.4s;`
        );
    });

    it('should return a Small Image if scolling', () => {
        const {height, width} = ImageWidths.Small;
        const {getByTestId} = render(<TestComponent />);

        const image = getByTestId('test-image');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('style');
        expect(image.getAttribute('style')).toEqual('height: 10px; width: 10px;');

        document.body.scrollTop = 50;

        resizeImage({image, windowWidth: 800});
        expect(image.getAttribute('style')).toEqual(
            `height: ${height}; width: ${width}; transition: 0.4s;`
        );
    });

    it('should return null', () => {
        const result = resizeImage({image: null, windowWidth: 100});
        expect(result).toBeNull();
    });
});
