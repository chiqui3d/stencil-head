/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { HeadInterface, } from "./interfaces";
export namespace Components {
    interface AppHead {
        "data": HeadInterface;
    }
}
declare global {
    interface HTMLAppHeadElement extends Components.AppHead, HTMLStencilElement {
    }
    var HTMLAppHeadElement: {
        prototype: HTMLAppHeadElement;
        new (): HTMLAppHeadElement;
    };
    interface HTMLElementTagNameMap {
        "app-head": HTMLAppHeadElement;
    }
}
declare namespace LocalJSX {
    interface AppHead {
        "data"?: HeadInterface;
    }
    interface IntrinsicElements {
        "app-head": AppHead;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-head": LocalJSX.AppHead & JSXBase.HTMLAttributes<HTMLAppHeadElement>;
        }
    }
}