import Log from "@novemberizing/log";

import assert from "assert";

import Config from "../src/Config.js";

const name = "Config";

Log.config = {
    error: false,
    warning: false,
    information: false,
    debug: false,
    verbose: false
};

describe(name, () => {
    it(` 0001 new Storage()`, async () => {
        await assert.rejects(async () => {
            const o = await Config.gen();
        });
    });

    it(` 0002 new Storage()`, async () => {
        await assert.rejects(async () => {
            const o = await Config.gen({});
        });
    });

    it(` 0003 new Storage()`, async () => {
        await assert.rejects(async () => {
            const o = await Config.gen({url: undefined});
        });
    });

    async function TestJsonConfig(o) {
        assert.throws(() => o.get());

        assert.strictEqual(o.del(""), undefined);
        assert.strictEqual(o.get(""), undefined);
        assert.strictEqual(o.set("", undefined), undefined);
        assert.strictEqual(o.get(""), undefined);
        assert.strictEqual(o.set("", null), null);
        assert.strictEqual(o.get("", null), null);
        assert.strictEqual(o.get("hello.world"), undefined);
        assert.deepStrictEqual(o.set("hello.world", {}), {});
        assert.deepStrictEqual(o.get(""), {hello: {world: {}}});
        assert.deepStrictEqual(o.get("hello"), {world: {}});
        assert.deepStrictEqual(o.set("hello2.world", {}), {});
        assert.deepStrictEqual(o.get(""), {hello: {world: {}}, hello2: {world: {}}});
    }

    it(` 0004 new Storage()`, async () => {
        const o = await Config.gen({url: "mem://./configure.json"});

        await TestJsonConfig(o);

        await o.save();
    });

    it(` 0005 new Storage()`, async () => {
        const o = await Config.gen({url: "fs://./configure.json"});

        await TestJsonConfig(o);

        await o.save();
    });
});