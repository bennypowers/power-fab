# Deprecated
Use `@material/mwc-fab` instead

# \<power-fab\>

Simple Material Design Floating Action Button

## Get It! 🚛
```
npm i -S @power-elements/power-fab
```

## Load It! 🐫
```html
<script async type="module" src="/node_modules/@power-elements/power-fab/power-fab.js"></script>
```

## Use It! 💪
```html
<dialog id="dialog">You're amazing! 😎</dialog>
<power-fab id="fab"
    label="🤷‍♂️"
    title="Are you amazing?"></power-fab>

<script>
fab.addEventListener('active-changed',
  event => dialog.open = event.detail.value)
</script>
```
