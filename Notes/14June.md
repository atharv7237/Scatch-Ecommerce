onst mongoose = require('mongoose')
const dbgr = require("debug")("development:mongoose")
const config = require('config')

mongoose
.connect(`${config.get("MONGO_URI")}`)
.then(()=>{
    console.log('connected to database')
})
.catch((err)=>{
    console.log("Error Occurred :",err)
}
)

module.exports =  mongoose.connection;

## Explanation ----

You have:

```js
const dbgr = require("debug")("development:mongoose")
```

This uses the **debug** package.

---

## What problem does it solve?

Normally we write:

```js
console.log("Connected to database");
```

The problem is:

* During development you may have hundreds of `console.log()` statements.
* During production you don't want them printed.
* It becomes difficult to manage logs.

The `debug` package lets you **turn logs on and off by category**.

---

## How it works

```js
const dbgr = require("debug")("development:mongoose")
```

creates a debug logger named:

```text
development:mongoose
```

Now instead of:

```js
console.log("Connected")
```

you write:

```js
dbgr("Connected")
```

---

## Example

```js
const dbgr = require("debug")("development:mongoose")

dbgr("Database Connected")
```

Nothing will print yet.

To see the logs:

```bash
DEBUG=development:* node app.js
```

or

```bash
DEBUG=development:mongoose node app.js
```

Output:

```text
development:mongoose Database Connected
```

---

## Why industry uses it

Suppose you have:

```js
const dbgr = require("debug")("development:mongoose")
const routeDebug = require("debug")("development:routes")
const authDebug = require("debug")("development:auth")
```

Then:

```js
dbgr("DB Connected")
routeDebug("GET /products")
authDebug("User logged in")
```

You can selectively enable:

```bash
DEBUG=development:auth node app.js
```

Only auth logs appear.

---

## Mistake in your code

You wrote:

```js
console.log/dbgr('connected to database')
```

and

```js
console.log/dbgr("Error Occurred :",err)
```

This is wrong.

It should be:

```js
dbgr("connected to database")
```

and

```js
dbgr("Error Occurred :", err)
```

or simply:

```js
console.log("connected to database")
```

if you don't want to use debug.

---

## Fixed version

```js
const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");
const config = require("config");

mongoose
  .connect(config.get("MONGO_URI"))
  .then(() => {
    dbgr("Connected to database");
  })
  .catch((err) => {
    dbgr("Error Occurred:", err);
  });

module.exports = mongoose.connection;
```

For your current level, think of `debug` as a **smarter version of `console.log()`** that can be turned on and off when needed. Many Express and Node projects use it to keep logs organized.
