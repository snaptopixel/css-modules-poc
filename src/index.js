import Button from 'components/button';
import customStyles from 'theme/custom-button';

var button = new Button('Hello World');
var button2 = new Button('I’m Orange', customStyles);

document.body.appendChild(button.render());
document.body.appendChild(button2.render());
