# appliCopier

---

Andy W
Feb 4, 2025

This is a Chrome extension that helps you quickly copy frequently used long text to your clipboard during the job application process—such as your email address, phone number, mailing address, or any other repetitive information.

Even if you only save a few seconds each time, those small savings add up!

### Expand and edit your list

In `index.html`

You can add new buttons. Make sure each button ID is unique.

```html
<button id="btn4">Button label</button>
```
In `script.js`

Make sure the ID matches the one defined in `index.html`.

```js
document
  .getElementById("btn4")
  .addEventListener("click", () =>
    copyToClipboard("Text you want to copy")
  );
```


### Deploy into your chrome, or brave browser

1. go to 
    - [chrome://extensions](chrome://extensions) or 
    - [brave://extensions](brave://extensions)

2. Turn on Developer mode (top-right corner).

3. Click Load unpacked (top-left corner) and select this folder.

