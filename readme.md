![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

The Stencil team finally released its own Stencil Helmet plugin https://stenciljs.com/docs/static-site-generation-meta-tags

# Head Component 

Head component for Stencil and Web Components

Handle document meta/head tags with web components an easy way.

Autocomplete|Intellisense for the most common properties, adding more every day.

## Install

- Run `npm i stencil-head --save`

## Usage

```tsx
import {HeadInterface, Head } from 'stencil-head'

const head: HeadInterface = {
      title: 'Home Page | app-head',
}
<Head data={head}/>
```

## Example

```tsx
import {Component, h} from '@stencil/core'
import {HeadInterface, Head } from 'stencil-head'

@Component({
  tag: 'app-home'
})
export class AppHome {

  render() {
    const head: HeadInterface = {
      title: 'Home Page | app-head',
      html: {
        lang: 'en'
      },
      metas: [{
        name: 'description',
        content: 'This is the description for the home page'
      },
      {
      property: 'og:description',
      content: 'This is the og:description for the home page'
      }],
    }
    return (
      <div>
        <Head data={head}/>
        <div class='app-home'>
          <h1>
            <app-translate keyLang="key"/>
          </h1>
          <p>
            Welcome to the Stencil App Starter.
            You can use this starter to build entire apps all with
            web components using Stencil!
            Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
          </p>
        </div>
      </div>
    )
  }
}
```
Note the declaration of the constant `head` This includes as a return interface `HeadInterface`
that way you can get all the autocomplete in any **IDE** that supports **Typescript**

```ts 
 export interface HeadInterface {
  html?: object;
  charset?: "utf-8" | "iso-8859-1" | string;
  title: string;
  metas?: MetaInterface[];
  links?: Link[];
  scripts?: Script[];
  styles?: string[];
  baseHref?: string;
}
```

In the following link you can see all properties and interfaces.
https://github.com/chiqui3d/stencil-head/blob/master/src/interfaces.ts

## Returns all Head properties in string format

```ts 
import {HeadInterface, BaseHead } from 'stencil-head'

const head: HeadInterface = {
  title: 'Home Page | app-head',
  baseHref: 'http://localhost:3333/',
  metas: [{
    name: 'description',
    content: 'Esto es una descripción de la página de inicio'
  },
    {
      property: 'og:description',
      content: 'Esto es una descripción de la página de inicio'
    }],
  links: [{
    rel: 'stylesheet',
    href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
    integrity: 'sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T',
    crossorigin: 'anonymous'
  },
    {
      href: 'https://fonts.googleapis.com/css?family=Roboto:100,900|Material+Icons'
    },
    {
      rel: 'canonical',
      href: 'https://github.com/chiqui3d/stencil-head'
    }],
  scripts: [{
    src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
    integrity: 'sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo',
    crossorigin: 'anonymous'
  },
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js',
      integrity: 'sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1',
      crossorigin: 'anonymous'
    },
    {
      src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js',
      integrity: 'sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM',
      crossorigin: 'anonymous'
    },
    {
      type: 'text/javascript',
      code: `console.log('Hello app-head');`
    }],
  styles: [
    `h2{color:blue}`
  ]
}
const headHtml = new BaseHead(head).html();
console.log(headHtml)
}
```

output:

```html
<base href="http://localhost:3333/">
<title>Home Page | app-head</title>
<meta name="description" content="Esto es una descripción de la página de inicio">
<meta property="og:description" content="Esto es una descripción de la página de inicio">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css?family=Roboto:100,900|Material+Icons">
<link rel="canonical" href="https://github.com/chiqui3d/stencil-head">
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script type="text/javascript">console.log('Hello app-head');</script>
<style type="text/css">h2{color:blue}</style>
```


## Note
I'm currently using it for several static websites with the Stencil `--prerender` option https://stenciljs.com/docs/prerendering, and it works great. 
I just need to do some tests for the title and description to see how
**Google** treats this currently when added by `Javascript`,
although currently **Google** says that it can read `Javascript`.

### Any recommendation of Typescript, Stencil or Writing will be welcome.
