import Log from "@novemberizing/log";

export default class ConfigException extends Error {
    static #tag = "ConfigException";

    #original = null;

    get original(){ return this.#original; }

    constructor(message, original = undefined) {
        super(message);

        this.#original = original;

        if(this.#original) {
            Log.w(ConfigException.#tag, original);
        }
    }
}