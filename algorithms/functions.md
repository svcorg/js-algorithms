# Algorithms

## Compose

{% code-tabs %}
{% code-tabs-item title="Compose.js" %}
```javascript
const compose = (...funcs) => {
  return (...params) => {
    let value;
    for (let index = funcs.length - 1; index >= 0 ; index -= 1) {
      const param = value ? [value] : params;
      value = funcs[index].apply(this, param);
    }
    return value;
  };
};
```
{% endcode-tabs-item %}
{% endcode-tabs %}

## Currying

{% code-tabs %}
{% code-tabs-item title="Currying.js" %}
```javascript
const currying = (func, ...args) => {
  const funcArguments = [];
  const funcLength = func.length;
  const tempFun = (funcArgs) => {
    funcArguments.splice(funcArguments.length, 0, funcArgs);
    if (funcLength > funcArguments.length) {
      return tempFun;
    }
    return func.apply(this, funcArguments);
  };
  return tempFun(args);
};
```
{% endcode-tabs-item %}
{% endcode-tabs %}

## Debounce

{% code-tabs %}
{% code-tabs-item title="Currying.js" %}
```javascript
const  debounce = (func, milliseconds) => {
    let validCall = true;
    return function (...args) {
        if(validCall === false) return;
        validCall = false;
        func.apply(this, args);
        setTimeout(() => validCall = true, milliseconds);
    }
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

## Delay

{% code-tabs %}
{% code-tabs-item title="Currying.js" %}
```javascript
const delay = (func, milliseconds) => {
    return function (...args) {
        setTimeout(() => func.apply(this, args), milliseconds);
    };
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

## Infinite args/calls

{% code-tabs %}
{% code-tabs-item title="Currying.js" %}
```javascript
const sum = (...sumArgs) => {
    let sum = 0;
    const tempFun = function (...args) {
        for(let index = 0; index < args.length; index += 1) {
            sum = sum + +args[index];
        }
        return tempFun;
    };
    tempFun.toString = () => sum;
    return tempFun(sumArgs);
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

## Pipe

{% code-tabs %}
{% code-tabs-item title="Currying.js" %}
```javascript
const pipe = (...funcs) => {
  return (...params) => {
    let value;
    for (let index = 0; index < funcs.length ; index += 1) {
      const param = value ? [value] : params;
      value = funcs[index].apply(this, param);
    }
    return value;
  };
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

