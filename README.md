convert burmese words to emoji

## Installation

```bash
npm install burmese-emoji
```

## Usage

```javascript

const {transform} = require('burmese-emoji');
transform('ပန်းသီး')
    .then(emoji => console.log(emoji))
    .catch(err => console.log(err))

```


```js
🍎

```

```javascript

const {transform} = require('burmese-emoji');
transform('လိမ္မော်သီး')
    .then(emoji => console.log(emoji))
    .catch(err => console.log(err))
```

```js
🍊

```

```javascript
const {transform} = require('burmese-emoji');
transform('ဆိတ်')
    .then(emoji => console.log(emoji))
    .catch(err => console.log(err))
```

```js
🐐

```


