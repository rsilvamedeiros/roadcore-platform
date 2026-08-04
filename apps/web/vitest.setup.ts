import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

import "@testing-library/jest-dom/vitest";

afterEach(() => {
  cleanup();
});

/*
 * jsdom doesn't implement layout/observer APIs that Ark UI's positioning
 * (Floating UI) and listbox scrolling (Zag.js) rely on in a real browser.
 * No-op polyfills are the standard fix for testing floating/popover-based
 * components under jsdom.
 */
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

globalThis.ResizeObserver ??= ResizeObserverMock;

if (!Element.prototype.scrollTo) {
  Element.prototype.scrollTo = () => {};
}

if (!Element.prototype.hasPointerCapture) {
  Element.prototype.hasPointerCapture = () => false;
}

if (!Element.prototype.releasePointerCapture) {
  Element.prototype.releasePointerCapture = () => {};
}

if (!Element.prototype.scrollIntoView) {
  Element.prototype.scrollIntoView = () => {};
}
