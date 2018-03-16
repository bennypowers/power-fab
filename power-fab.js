import { html, LitElement } from '../../@polymer/lit-element/lit-element.js';

customElements.define('power-fab', class PowerFab extends LitElement {
  static get properties() {
    return {
      label: String,
      active: Boolean,
    };
  }

  toggleActive(event) {
    this.active = !this.active;
    this.dispatchEvent(new CustomEvent('active-changed', {detail: {value: this.active}}));
  }

  constructor() {
    super();
    this.setAttribute('role', 'button');
    this.setAttribute('tabindex', '0');
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', event => this.toggleActive(event));
    this.addEventListener('mousedown', () => this.setAttribute('pressed', ''));
    this.addEventListener('mouseup', () => this.removeAttribute('pressed'));
    this.addEventListener('keydown', event => ['Space', 'Enter'].includes(event.code) && this.setAttribute('pressed', ''));
    this.addEventListener('keyup', event => ['Space', 'Enter'].includes(event.code) && this.removeAttribute('pressed'));
    this.addEventListener('keypress', event => ['Space', 'Enter'].includes(event.code) && this.toggleActive(event));
  }

  render({label = '+', active}) {
    active ? this.setAttribute('active', '') : this.removeAttribute('active');
    if (this.title) this.setAttribute('aria-label', this.title);
    return html`
    <style>
    :host {
      --power-fab-background-color-hue: 349;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--power-fab-label-color, white);
      border-radius: 100%;
      width: 45px;
      height: 45px;
      border: none;
      outline: none;
      background-color: hsl(var(--power-fab-background-color-hue), 100%, 50%);
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    }

    :host(:focus) {
      background-color: hsl(var(--power-fab-background-color-hue), 75%, 50%);
    }

    :host([pressed]) {
      background-color: hsl(var(--power-fab-background-color-hue), 100%, 25%);
      box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.25);
    }

    :host([active]) {
      background-color: hsl(var(--power-fab-background-color-hue), 75%, 50%);
    }

    span {
      display: block;
      text-align: center;
      vertical-align: center;
    }
    </style>
    <span>${label}</span>
    `;
  }
});
