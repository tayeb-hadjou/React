import ReactDOM from 'react-dom';
import App from '../components/app.jsx';
const bootstrapReact= () => ReactDOM.render(
    <App/>,
    document.getElementById('app')
)
window.addEventListener('DOMContentLoaded', bootstrapReact);
