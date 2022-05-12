import ReactDOM from 'react-dom';
import App from '../components/app.js';
const bootstrapReact= () => ReactDOM.render(
    <App/>,
    document.getElementById('app')
)
window.addEventListener('DOMContentLoaded', bootstrapReact);
