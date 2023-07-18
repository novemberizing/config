import ConfigException from "../Exception.js";

export default class ConfigExceptionInvalid extends ConfigException {
    constructor(message, original = undefined) {
        super(message, original);
    }
}
