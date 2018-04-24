### [Comics](code.zip)

`{{ page.path | replace:'README.md','' }}code/comics.mjs`:
```js
{% include_relative code/comics.js %}
```

`{{ page.path | replace:'README.md','' }}code/comics.print.mjs`:
```js
{% include_relative code/comics.print.mjs %}
```

> [Response](response/comics.js)

> Tips:<br>
> Use `map` or `reduce`