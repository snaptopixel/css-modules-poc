import defaultStyles from './button.scss';

// Dummy button component that doesn't do much of anything
export default class Button {

  // Passing styles in allows for customizing stuff
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
