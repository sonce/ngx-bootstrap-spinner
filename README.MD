A library with bootstrap spinners for or Angular 4/5/6/7/8/9/10.(https://sonce.github.io/ngx-bootstrap-spinner/).</br>
It is change by npx-spnner. (https://github.com/Napster2210/ngx-spinner/).Thanks!

<p align="center">
  <img height="200px" width="200px" style="text-align: center;" src="https://cdn.rawgit.com/sonce/ngx-bootstrap-spinner/gh-pages/assets/logo.png">
  <h1 align="center">NgxBootstrapSpinner</h1>
</p>

[![Support](https://img.shields.io/badge/Support-Angular%204%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%205%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%206%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%207%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%208%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%209%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%2010%2B-blue.svg?style=flat-square)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)]()
[![devDependency Status](https://img.shields.io/david/expressjs/express.svg?style=flat-square)]()

## What's New

- change to Bootstrap Spinners
- Angular 10 support 🥳🥳🥳🥳
- Latest Angular Dependencies
- `ng add` command to add `ngx-bootstrap-spinner` to the project
- Bug Fixes

Use appropriate version based on your Angular version.

| Angular 4   | Angular 5   | Angular 6/7 | Angular 8 |  Angular 9  |  Angular 10  |
| ----------- | ----------- | ----------- | --------- | ----------- | ------------ |
| >= `v1.2.0` | >= `v2.0.0` | `v7.2.0`    | `v8.1.0`  | >=`v9.0.1`  | >=`v10.0.1`  |

## Table of contents

- [What's New](#whats-new)
- [Table of contents](#table-of-contents)
- [Browser Support](#browser-support)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Methods](#methods)
- [Available Options](#available-options)
    - [Using Spinner Type](#using-spinner-type)
    - [Using Custom Spinner](#using-custom-spinner)
    - [NOTE](#note)
- [Useful Tips](#useful-tips)
- [Versioning](#versioning)
- [Creator](#creator)
    - [Zack](#zack)
- [Credits](#credits)
  - [License](#license)

## Browser Support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Latest ✔                                                                                                                                                                                                      | Latest ✔                                                                                                                                                                                                          | IE11, Edge ✔                                                                                                                                                                                                    | Latest ✔                                                                                                                                                                                                                  | Latest ✔                                                                                                                                                                                                  |

## Features

- **Angular 10** Support
- Custom spinner image support(gif), you can pass `img` tag
- Bootstrap Spinners
- Configurable option through service
- Fullscreen Mode(Enable/Disable)
- `show()/hide()` methods return promise
- Dynamic `z-index`
- Smooth animation while `hide/show` the spinner
- New updated DEMO website

## Demo

[Working Demo](https://sonce.github.io/ngx-bootstrap-spinner/)

## Installation

`ngx-bootstrap-spinner` is available via [npm](https://www.npmjs.com/package/ngx-bootstrap-spinner) and [yarn](https://yarnpkg.com/en/package/ngx-bootstrap-spinner)

Using npm:

```bash
$ npm install ngx-bootstrap-spinner --save
```

Using yarn:

```bash
$ yarn add ngx-bootstrap-spinner
```

Using angular-cli:

```bash
$ ng add ngx-bootstrap-spinner
```

## Usage

Import `NgxSpinnerModule` in in the root module(`AppModule`):

```typescript
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// Import library module
import { NgxSpinnerModule } from "ngx-bootstrap-spinner";

@NgModule({
  imports: [
    // ...
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

Add `NgxSpinnerService` service wherever you want to use the `ngx-bootstrap-spinner`.

```typescript
import { NgxSpinnerService } from "ngx-bootstrap-spinner";

class AppComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }
}
```

Now use in your template

```html
<ngx-bootstrap-spinner></ngx-bootstrap-spinner>
```

See [Demo](#demo)

## Methods

- `NgxSpinnerService.show()` Shows the spinner
- `NgxSpinnerService.hide()` Hides the spinner

## Available Options

- **[bdColor]**: RGBA color format.
  To set background-color for backdrop, default `rgba(51,51,51,0.8)` where `aplha` value(0.8) is opacity of backdrop
- **[size]**: Anyone from `small`, `default`.
  To set size of spinner, default `default`
- **[color]**: Any css color format.
  To set color of spinner, default `#fff`
- **[type]**: Bootstrap spinner:border,grow.see (https://getbootstrap.com/docs/4.4/components/spinners/).
  To set type of spinner, default `border`
- **[isButtonSpinner]**:show loader in button.see(https://getbootstrap.com/docs/4.4/components/spinners/#buttons).
- **[autoDisableButton]**:when isButtonSpinner is true.and spinner is shown,the own button disabled will set to true.
- **[fullScreen]**: `true` or `false`
  To enable/disable fullscreen mode(overlay), default `true`
- **[name]**: For multiple spinners
  To set name for spinner, default `primary`
- **[zIndex]**: For dynamic z-index
  To set z-index for the spinner, default `99999`
- **[loaderTemplate]**: For custom spinner image
  To set custom template for the custom spinner, default `null`
- **[loadingText]**:Loading text.default:Loading...
- **[loadingTextTemplate]**:For custom loading text

#### Using Spinner Type
```html
<ngx-bootstrap-spinner
  bdColor="rgba(51,51,51,0.8)"
  size="default"
  color="#fff"
  type="border"
>
</ngx-bootstrap-spinner>
```

#### Using Custom Spinner
```html
<ngx-bootstrap-spinner
  bdColor="rgba(0, 0, 0, 1)">
  loaderTemplate="<img src='https://media.giphy.com/media/o8igknyuKs6aY/giphy.gif' />"
</ngx-bootstrap-spinner>
```

---

#### NOTE

- You can pass `HTML` code as loading text now, instead of input parameter(`loadingText`). Check above code for reference.
- If you want multiple `ngx-bootstrap-spinner` instance, just add `name` attribute with `ngx-bootstrap-spinner` component. But in this case, you've to pass that particular name of a spinner in `show/hide` method. Check [Demo](#demo)
- You can also change the options/configuration of spinner through service now.

```javascript
this.spinner.show("mySpinner", {
  type: "border",
  size: "default",
  bdColor: "rgba(0, 0, 0, 1)",
  color: "white",
  loaderTemplate: "<img src='https://media.giphy.com/media/o8igknyuKs6aY/giphy.gif' />"
});
```

## Useful Tips

- Make sure you've added `CUSTOM_ELEMENTS_SCHEMA` as your schema in your main module.
- If you use multiple `show()` methods in a single component or single function one after another then wrap the `show()` method within `setTimeout()` method to avoid any rendering issue.
- When you want to use spinner inside any container(`fullScreen: false`), in that case your parent element of spinner must have `position: relative;` style property.
- You can't set custom template through service options, it's a limitation by Angular itself.

## Versioning

ngx-bootstrap-spinner will be maintained under the Semantic Versioning guidelines.
Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

For more information on SemVer, please visit http://semver.org.

## Creator

#### [Zack](mailto:175262582@qq.com)

- [@GitHub](https://github.com/sonce)

## Credits

Inspired by [Load Awesome by Daniel Cardoso.](https://github.com/Napster2210/ngx-spinner)

### License

ngx-bootstrap-spinner is [MIT licensed](./LICENSE).
