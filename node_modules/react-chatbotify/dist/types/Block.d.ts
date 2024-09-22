/// <reference types="react" />
import { Params } from "./Params";
/**
 * Defines the attributes allowed within a conversation block.
 */
export type Block = {
    message?: string | void | ((params: Params) => string | void) | ((params: Params) => Promise<string | void>);
    options?: Array<string> | ((params: Params) => Array<string>) | ((params: Params) => Promise<Array<string>>);
    checkboxes?: {
        items: Array<string>;
        max?: number;
        min?: number;
    } | ((params: Params) => {
        items: Array<string>;
        max?: number;
        min?: number;
    }) | ((params: Params) => Promise<{
        items: Array<string>;
        max?: number;
        min?: number;
    }>);
    component?: JSX.Element | void | ((params: Params) => JSX.Element | void) | ((params: Params) => Promise<JSX.Element | void>);
    chatDisabled?: boolean | ((params: Params) => boolean) | ((params: Params) => Promise<boolean>);
    isSensitive?: boolean | ((params: Params) => boolean) | ((params: Params) => Promise<boolean>);
    transition?: {
        duration: number;
        interruptable?: boolean;
    } | void | ((params: Params) => {
        duration: number;
        interruptable?: boolean;
    } | void) | ((params: Params) => Promise<{
        duration: number;
        interruptable?: boolean;
    } | void>);
    function?: ((params: Params) => void) | ((params: Params) => Promise<void>);
    file?: ((params: Params) => void) | ((params: Params) => Promise<void>);
    path?: string | null | undefined | ((params: Params) => string | null | undefined) | ((params: Params) => Promise<string | null | undefined>);
};
