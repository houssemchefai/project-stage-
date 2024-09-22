import { Block } from "../../types/Block";
import { Params } from "../../types/Params";
import { Flow } from "../../types/Flow";
/**
 * Handles processing of options in current block.
 *
 * @param block current block being processed
 * @param path path associated with the current block
 * @param handleActionInput handles action input from user
 * @param params contains parameters that can be used/passed into attributes
 */
export declare const processOptions: (block: Block, path: keyof Flow, handleActionInput: (path: keyof Flow, userInput: string, sendUserInput: boolean) => Promise<void>, params: Params) => Promise<void>;
