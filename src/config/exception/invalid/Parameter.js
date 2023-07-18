import ConfigExceptionInvalid from "../Invalid.js";

export default class ConfigExceptionInvalidParameter extends ConfigExceptionInvalid {
    constructor(message, original = undefined) {
        super(message, original);
    }
}

