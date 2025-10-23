import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home/Home';
import Team from './components/pages/Team/Team';
import ProblemDescription from './components/pages/Project/ProblemDescription/ProblemDescription';
import Results from './components/pages/Project/Results/Results';
import Engineering from './components/pages/Project/Engineering/Engineering';
import Experiments from './components/pages/Experiments/Experiments';
import Communication from './components/pages/Communication/Communication';
import './App.css';
import Name1 from './components/pages/Name1/Name1';
import Name2 from './components/pages/Name2/Name2';
import Name3 from './components/pages/Name3/Name3';
import { NavigationProvider } from './contexts/NavigationContext';

function App() {
  return (
    <Router>
      <NavigationProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="team" element={<Team />} />
            {/* NAME1 Routes */}
            <Route path="name1">
              <Route index element={<Name1 />} />
              <Route path="project">
                <Route path="problem-description" element={<ProblemDescription />} />
                <Route path="results" element={<Results />} />
                <Route path="engineering" element={<Engineering />} />
              </Route>
              <Route path="experiments" element={<Experiments />} />
              <Route path="communication" element={<Communication />} />
            </Route>
            {/* NAME2 Routes */}
            <Route path="name2">
              <Route index element={<Name2 />} />
              <Route path="project">
                <Route path="problem-description" element={<ProblemDescription />} />
                <Route path="results" element={<Results />} />
                <Route path="engineering" element={<Engineering />} />
              </Route>
              <Route path="experiments" element={<Experiments />} />
              <Route path="communication" element={<Communication />} />
            </Route>
            {/* NAME3 Routes */}
            <Route path="name3">
              <Route index element={<Name3 />} />
              <Route path="project">
                <Route path="problem-description" element={<ProblemDescription />} />
                <Route path="results" element={<Results />} />
                <Route path="engineering" element={<Engineering />} />
              </Route>
              <Route path="experiments" element={<Experiments />} />
              <Route path="communication" element={<Communication />} />
            </Route>
            {/* 404 Fallback */}
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </NavigationProvider>
    </Router>
  );
}

export default App;
