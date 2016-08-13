// Stub component for example only, it has default styles but can also be customized
import Button from 'components/button';

// Normal button with default styles
var button = new Button('Hello World');

// Builds upon the default button styles
import customStyles from 'theme/custom-button';

// Same button, different style(s)
var button2 = new Button('I’m Orange', customStyles);

// Add buttons to the dom so we can see them
document.body.appendChild(button.render());
document.body.appendChild(button2.render());
