import './style.css';
import menu from './menu';
import form from './form';
import home from './home';
import content from './content';
import wacamole from './assets/wacamole.png';
import kickaboo from './assets/kickaboo.png';
import polloking from './assets/polloking.png';
import spacetasty from './assets/spacetasty.png';
import tristeza from './assets/tristeza.png';
import felicidad from './assets/felicidad.png';

document.getElementById('content').innerHTML = content();
document.getElementById('formid').innerHTML = form();
document.getElementById('menuid').innerHTML = menu();
document.getElementById('homeid').innerHTML = home();