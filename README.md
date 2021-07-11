# C1200's SDK

## EventEmitter

Require:

```js
const EventEmitter = require("c1200s-sdk/eventemitter");
// OR
const EventEmitter = require("c1200s-sdk").EventEmitter;
```

Initiate:

```js
class MyClass extends EventEmitter {
    constructor() {
        super();
    }
}
```

Trigger an event:

```js
this.emit();
```

Register a listener:

```js
this.on();
// OR
this.once();
// OR
this.addListener(); // Just an alias of on()
```

## Formatter

Require:

```js
const format = require("c1200s-sdk/formatter");
// OR
const format = require("c1200s-sdk").format;
```

Use:

```js
"Hello, {}!".format("World"); // => Hello, World!
// OR
format("Hello, {}!", "World"); // => Hello, World!
```

## Logger

Require:

```js
const Logger = require("c1200s-sdk/logger");
// OR
const Logger = require("c1200s-sdk").Logger;
```

Initiate:

```js
var options = {
    showTime: Boolean, // Default: true
};

const log = new Logger(options);
```

Use:

```js
// Info
log.info("Hello, World!");
// Warn
log.warn("Hello, World!");
// Error
log.error("Hello, World!");
```

---

Created by [C1200](https://c1200.js.org/) - Licensed under the ISC software license.
