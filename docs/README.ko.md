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

> "Novemberizing config" 는 설정을 생성하고, 삭제하고, 읽고 수정하는 작업을 쉽게 수행할 수 있도록 자바스크립트로 만들어진 라이브러리입니다.

"Novemberizing config" 의 목표는 다양한 스토리지와 다양한 타입의 설정을 지원하여 URL 변경만으로 설정을 쉽게 사용할 수 있도록 하는 것입니다.

![Class Diagram Log](https://novemberizing.github.io/config/assets/images/ClassDiagramConfig.jpg)

Config 객체는 `save()`, `load()`, `get(key)`, `set(key, value)`, `del(key)` 의 메서드를 지원합니다. Config 객체를 생성하려면 URL을 명시하여 `Config.gen({ url: ... })`를 호출하기만 하면 됩니다.

```js
const o = await Config.gen({url: "fs://./configure.json"});

console.log(o.set("hello.world", {}));
console.log(o.get("hello"));
console.log(o.del("hello"));
```

## 설치

Config 라이브러리는 "npm"을 이용하여 설치할 수 있습니다.

```
npm install --save @novemberizing/config
```

## 사용법

URL이 명시된 `Config.gen()`을 호출하여 객체를 생성하고, `get`, `set`, `del` 의 명령을 수행할 수 있습니다.

```js
const o = await Config.gen({url: "fs://./configure.json"});

console.log(o.set("hello", "world"));
console.log(o.get(""));
console.log(o.del("hello"));
```

### 메모리 설정의 사용

메모리 기반의 설정을 사용하려면, `URL`에 `mem:` 프로토콜을 명시하여 `Config.gen()` 함수를 호출하면 객체가 생성되고, 생성된 객체를 통하여 명령을 수행할 수 있습니다. 메모리 기반의 설정은 메모리 스토리지를 사용하기 때문에, 어플리케이션이 실행할 때만 URL 위치에 저장된 데이터를 사용할 수 있습니다. 어플리케이션이 종료되면 더 이상 저장된 설정을 사용할 수 없습니다.


```js
const o = await Config.gen({ url: "mem://./configure.json" });

console.log(o.set("hello", "world"));
console.log(o.get(""));
console.log(o.del("hello"));
```

### 파일 설정의 사용

파일 설정의 생성 역시 메모리 설정과 마찬가지로 `URL`에 프로토콜(`fs:`)를 명시하여 사용할 수 있습니다. 파일 설정의 경우 메모리 설정과 달리 어플리케이션이 종료되더라도 파일이 존재하면 계속 사용할 수 있습니다.


```js
const o = await Config.gen({ url: "fs://./configure.json" });

console.log(o.set("hello", "world"));
console.log(o.get(""));
console.log(o.del("hello"));
```

### 문서

[Novemberizing config api](https://novemberizing.github.io/config/api)
