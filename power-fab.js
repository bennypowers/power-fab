import { html, LitElement } from '../../@polymer/lit-element/lit-element.js';

customElements.define('power-fab', class PowerFab extends LitElement {
  static get properties() {
    return {
      label: String,
      title: String,
      active: Boolean,
    };
  }

  toggleActive(event) {
    this.active = !this.active;
    this.dispatchEvent(new CustomEvent('active-changed', {detail: {value: this.active}}));
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', event => this.toggleActive(event));
    this.addEventListener('mousedown', event => this.setAttribute('pressed', ''));
    this.addEventListener('mouseup', event => this.removeAttribute('pressed'));
  }

  render({label = '+', title, active}) {
    active ? this.setAttribute('active', '') : this.removeAttribute('active');
    this.setAttribute('aria-label', title);
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
      background-color: hsl(var(--power-fab-background-color-hue), 80%, 50%);
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    }

    :host([pressed]) {
      background-color: hsl(var(--power-fab-background-color-hue), 100%, 25%);
      box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.25);
    }

    :host([active]) {
      background-color: hsl(var(--power-fab-background-color-hue), 90%, 50%);
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
