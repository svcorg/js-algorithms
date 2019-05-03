# Algorithms

#### Compose

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



