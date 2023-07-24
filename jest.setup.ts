/* eslint-disable @typescript-eslint/no-empty-function */
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
        matches: true,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

const originalError = console.error;
beforeAll(() => {
    console.error = (...args) => {
        if (/Warning/.test(args[0])) {
            return;
        }
        originalError.call(console, ...args);
    };
    const { getComputedStyle } = window;
    window.getComputedStyle = (elt) => getComputedStyle(elt);
});

afterAll(() => {
    console.error = originalError;
});
