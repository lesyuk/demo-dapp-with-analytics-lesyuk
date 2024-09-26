import './patch-local-storage-for-github-pages';

import React, {StrictMode} from 'react'
import { render } from 'react-dom';
import App from './App'
import './index.scss'
import eruda from "eruda";
import telegramAnalytics from '@telegram-apps/analytics'

eruda.init();

telegramAnalytics.init({
    token: 'eyJhcHBfbmFtZSI6Im5wbXRlc3QiLCJhcHBfdXJsIjoiaHR0cHMvL3QubWUvc2RrX2FuYWx5dGljc190ZXN0X2JvdCIsImFwcF9kb21haW4iOiJodHRwczovL21hc3Rlci5kMXRlZmo3bjZuMmVmMC5hbXBsaWZ5YXBwLmNvbS8ifQ==!ni0VLvLH6Bird6Ou3nLCjFq90BcpDJEs67sUf0bc58M=',
    appName: 'npmtest',
});

render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById('root') as HTMLElement
)
