import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BusinessPage from './businessPage';
import SponsorPage from './sponsorPage';
import FilteredCompaniesPage from "./filteredCompaniesPage";

function App() {
  const [results, setResults] = useState([]); // Define results state

  return (
    <Router>
      <Routes>
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/sponsor" element={<SponsorPage />} />
        <Route path="/filtered-companies" element={<FilteredCompaniesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
