/**
 * @module      Config
 */
import _ from "lodash";

import Storage from "@novemberizing/storage";

import ConfigExceptionInvalidParameter from "./config/exception/invalid/Parameter.js";

/**
 * @class
 * 
 */
export default class Config {
    /**
     * Generate config object
     * 
     * @param {Object} config     Settings to create a Config object
     * @returns Config      Config object
     */
    static async gen(config) {
        const o = new Config(config);

        await o.load();

        return o;
    }

    #url = null;
    #storage = null;
    #json = undefined;

    /**
     * Create config object
     * 
     * @param {Object} config       Settings to create a Config object
     * 
| Field | Type   | Description |
| ----- | ------ | ----------- |
| url   | String | url string  |
     */
    constructor(config) {
        this.#url = new URL(config.url);

        this.#storage = new Storage(Object.assign({url: this.#url}, config.storage));
    }

    /**
     * Load all data from storage
     * 
     * @returns     Object      Config data
     */
    async load() {
        this.#json = await this.#storage.query("get", "");

        return this.#json;
    }

    /**
     * Save data to storage
     * 
     * @returns     Object      data
     */
    async save() {
        this.#json = await this.#storage.query("set", "", this.#json);

        return this.#json;
    }

    get json(){ return this.#json; }

    /**
     * Retrieve data from the key.
     * 
     * @param       {String}    key     key
     * @returns     Object      data
     */
    get(key) {
        if(typeof key === "string") {
            return key ? _.get(this.#json, key) : this.#json;
        }
        throw new ConfigExceptionInvalidParameter();
    }

    /**
     * Set data to the key
     * 
     * @param {String} key      key
     * @param {Object} value    value
     * @returns Object          stored data
     */
    set(key, value) {
        if(typeof key === "string") {
            if(key) {
                _.set(this.#json || (this.#json = {}), key, value);
            } else {
                this.#json = value;
            }

            return value;
        }
        throw new ConfigExceptionInvalidParameter();
    }

    /**
     * Delete data at the key
     * 
     * @param {String} key      key
     * @returns Object          always return undefined
     */
    del(key) {
        if(typeof key === "string") {
            if(key) {
                if(_.get(this.#json, key) !== undefined) {
                    _.set(this.#json, key, undefined);
                }
            } else {
                this.#json = undefined;
            }

            return undefined;
        }

        throw new ConfigExceptionInvalidParameter();
    }
}
