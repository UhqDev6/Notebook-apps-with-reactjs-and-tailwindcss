import React from 'react';
import { createRoot } from 'react-dom/client';

import { Notebook } from './pages/Notebook';

// import style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <Notebook/>
);