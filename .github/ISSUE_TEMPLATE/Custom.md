---
name: Prerequisites
about: Useful tips

---

`ngx-bootstrap-spinner` is a custom element, so in this case, if you add `<ngx-bootstrap-spinner>` in your HTML file then you have to add **CUSTOM_ELEMENTS_SCHEMA** to your app module.

```
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// ........

@NgModule({
// ...
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
```
