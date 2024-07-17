import React from 'react';
import { createRoot } from 'react-dom/client';
import UserManagement from './components/UserManagement';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<UserManagement />);
