import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dash from './dashboard/dash.tsx';
import Account from './dashboard/account.tsx';
import Cost from "./dashboard/cost.tsx";
import Anomaly from "./dashboard/anomaly.tsx";
import Recommendations from "./dashboard/recommendations.tsx";

import './index.css';
import CostOptimisation from './dashboard/cost-optimisation.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dash />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cost" element={<Cost />} />
        <Route path="/cost-optimisation" element={<CostOptimisation />} />
        <Route path="/anomaly" element={<Anomaly />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
