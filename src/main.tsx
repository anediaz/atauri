import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { datadogRum } from '@datadog/browser-rum';
import App from './App.tsx';
import './main.css';

datadogRum.init({
  applicationId: import.meta.env.VITE_DD_RUM_APPLICATION_ID || '',
  clientToken: import.meta.env.VITE_DD_RUM_CLIENT_TOKEN || '',
  site: import.meta.env.VITE_DD_SITE || '',
  service: import.meta.env.VITE_DD_SERVICE || '',
  env: import.meta.env.VITE_DD_ENV || '',
  version: import.meta.env.VITE_DD_VERSION || '0.0.0',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 100,
  defaultPrivacyLevel: 'allow',
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)