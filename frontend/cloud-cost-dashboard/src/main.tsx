import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dash from './dashboard/dash.tsx';
import Account from './dashboard/account.tsx';
import Cost from './dashboard/cost.tsx';
import Anomaly from './dashboard/anomaly.tsx';
import Recommendations from './dashboard/recommendations.tsx';

import './index.css';
import CostOptimisation from './dashboard/cost-optimisation.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dash />} />
        <Route path='/aws' element={<Dash />} />
        <Route path='/azure' element={<Dash />} />
        <Route path='/master' element={<Dash />} />
        {/* Nested routes inside AWS */}
        <Route path='/aws/account' element={<Account />} />
        <Route path='/aws/cost' element={<Cost />} />
        <Route path='/aws/cost-optimisation' element={<CostOptimisation />} />
        <Route path='/aws/anomaly' element={<Anomaly />} />
        <Route path='/aws/recommendations' element={<Recommendations />} />

        {/* Nested routes inside Azure */}
        <Route path='/azure/account' element={<Account />} />
        <Route path='/azure/cost' element={<Cost />} />
        <Route path='/azure/cost-optimisation' element={<CostOptimisation />} />
        <Route path='/azure/anomaly' element={<Anomaly />} />
        <Route path='/azure/recommendations' element={<Recommendations />} />

        {/* Nested routes inside Master */}
        <Route path='/master/account' element={<Account />} />
        <Route path='/master/cost' element={<Cost />} />
        <Route path='/master/cost-optimisation' element={<CostOptimisation />} />
        <Route path='/master/anomaly' element={<Anomaly />} />
        <Route path='/master/recommendations' element={<Recommendations />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
