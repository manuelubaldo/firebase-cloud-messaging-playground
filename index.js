import { createRoot } from 'react-dom/client';
import App from './src/app';

var element = document.getElementById('app');
var root = createRoot(element);
root.render(<App />);