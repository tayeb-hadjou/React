import ReactDOM from 'react-dom';
const bootstrapReact= () => ReactDOM.render(
    <p>test</p>,
    document.getElementById('insertReactHere')
)
window.addEventListener('DOMContentLoaded', bootstrapReact);
