import defaultStyles from './button.scss';

export default class Button {
  constructor(label, styles=defaultStyles) {
    this.styles = styles;
    this.label = label;
  }

  render() {
    let dom = document.createElement('div');
    dom.innerHTML = `
      <div class="${this.styles.component}">${this.label}</div>
    `.trim();
    return dom.firstChild;
  }
}
