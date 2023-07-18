NOVEMBERIZING CONFIG
====================

[ENGLISH](https://novemberizing.github.io/config/README.en.html) |
[한국어](https://novemberizing.github.io/config/README.ko.html)

![Node js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

![Github issues](https://img.shields.io/github/issues/novemberizing/config)
![GitHub license](https://img.shields.io/github/license/novemberizing/config)
![GitHub release](https://img.shields.io/github/v/release/novemberizing/config)
![Npm version](https://img.shields.io/npm/v/@novemberizing/config)

----

> "Novemberizing config" is a library written in JavaScript that makes it easy to create, delete, read and modify configurations.

The goal of "Novemberizing config" is to support various storage and different types of configuration, making it easy to use the configuration just by changing the URL.

![Class Diagram Log](https://novemberizing.github.io/config/assets/images/ClassDiagramConfig.jpg)

The Config object supports `save()`, `load()`, `get(key)`, `set(key, value)`, `del(key)` methods. To create a Config object, simply call `Config.gen({ url: ... })`, specifying the URL.

```js
const o = await Config.gen({url: "fs://./configure.json"});

console.log(o.set("hello.world", {}));
console.log(o.get("hello"));
console.log(o.del("hello"));
```

## INSTALL

Config library can be installed using "npm".

```
npm install --save @novemberizing/config
```

## USAGE

You can create an object by calling `Config.gen()` with a specified URL, and perform `get`, `set`, and `del` commands.

```js
const o = await Config.gen({url: "fs://./configure.json"});

console.log(o.set("hello", "world"));
console.log(o.get(""));
console.log(o.del("hello"));
```

### USE OF MEMORY SETTINGS

To use memory-based configuration, call the `Config.gen()` function by specifying the `mem:` protocol in the `URL` to create an object and execute commands through the created object. Memory-based settings use memory storage, so the data stored in the URL location is available only when the application is running. When the application is closed, the saved settings are no longer available.


```js
const o = await Config.gen({ url: "mem://./configure.json" });

console.log(o.set("hello", "world"));
console.log(o.get(""));
console.log(o.del("hello"));
```

### USE OF FILE SETTINGS

Creating file settings can also be used by specifying the protocol (`fs:`) in `URL`, just like memory settings. In the case of file settings, unlike memory settings, you can continue to use the file as long as it exists even if the application is closed.


```js
const o = await Config.gen({ url: "fs://./configure.json" });

console.log(o.set("hello", "world"));
console.log(o.get(""));
console.log(o.del("hello"));
```

### DOCUMENT

[Novemberizing log api](https://novemberizing.github.io/config/api)
