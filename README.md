# GitHub Linguist Colours

![travis](https://api.travis-ci.org/Reeceeboii/GitHub-Linguist-Colors.svg?branch=master&status=passed)

Given a string denoting a programming language, return its corresponding GitHub linguist hex colour:


```javascript
const linguist = require('linguist');
```

```javascript
linguist.GetHexColour('JavaScript'); // non case-sensitive

>#f1e05a

linguist.GetHexColour('Swift');

>#ffac45
```

For languages that don't exist, `#000` (black) is returned

```js
linguist.GetHexColour('unobtanium');

>#000
```

```js
linguist.GetColourMap();
>
  {
  ...
  'graphql' => '#e10098',
  'groovy' => '#e69f56',
  'html' => '#e34c26',
  'hack' => '#878787',
  'haml' => '#ece2a9',
  'handlebars' => '#f7931e',
  'harbour' => '#0e60e3',
  'haskell' => '#5e5086',
  'haxe' => '#df7900',
  'hiveql' => '#dce200',
  'holyc' => '#ffefaf',
  ...
  }

```