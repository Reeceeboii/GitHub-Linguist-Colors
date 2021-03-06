# GitHub Linguist Colours

![travis](https://api.travis-ci.org/Reeceeboii/GitHub-Linguist-Colors.svg?branch=master&status=passed)
[![npm version](https://badge.fury.io/js/github-linguist-colours.svg)](https://badge.fury.io/js/github-linguist-colours)

Given a string denoting a programming language, return its corresponding GitHub linguist hex colour:


```javascript
import { getHexColour, getColourMap } from 'github-linguist-colours';
```

```javascript
getHexColour('Swift');

>#ffac45
```

You can also simply return the underlying object itself if you wish:
```js
getColourMap();
>
  {
  ...
    graphql: '#e10098',
    groovy: '#e69f56',
    html: '#e34c26',
    hack: '#878787',
    haml: '#ece2a9',
    handlebars: '#f7931e',
    harbour: '#0e60e3',
    haskell: '#5e5086',
    haxe: '#df7900',
    hiveql: '#dce200',
    holyc: '#ffefaf',
  ...
  }
```