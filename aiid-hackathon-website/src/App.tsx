import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home/Home';
import Team from './components/pages/Team/Team';
import Communication from './components/pages/Communication/Communication';
import Tutorial from './components/pages/Tutorial/Tutorial';

import Project1 from './components/pages/Project1/Project1';
import Project1Background from './components/pages/Project1/Background/Background';
import Project1Idea from './components/pages/Project1/Idea/Idea';
import Project1Implementation from './components/pages/Project1/Implementation/Implementation';
import Project1Result from './components/pages/Project1/Result/Result';

import Project2 from './components/pages/Project2/Project2';
import Project2Background from './components/pages/Project2/Background/Background';
import Project2Idea from './components/pages/Project2/Idea/Idea';
import Project2Implementation from './components/pages/Project2/Implementation/Implementation';
import Project2Result from './components/pages/Project2/Result/Result';

import Project3 from './components/pages/Project3/Project3';
import Project3Background from './components/pages/Project3/Background/Background';
import Project3Idea from './components/pages/Project3/Idea/Idea';
import Project3Implementation from './components/pages/Project3/Implementation/Implementation';
import Project3Result from './components/pages/Project3/Result/Result';

import { NavigationProvider } from './contexts/NavigationContext';
import './App.css';

function App() {
  return (
    <Router>
      <NavigationProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="team" element={<Team />} />

            <Route path="project1">
              <Route index element={<Project1 />} />
              <Route path="background" element={<Project1Background />} />
              <Route path="idea" element={<Project1Idea />} />
              <Route path="implementation" element={<Project1Implementation />} />
              <Route path="result" element={<Project1Result />} />
            </Route>

            <Route path="project2">
              <Route index element={<Project2 />} />
              <Route path="background" element={<Project2Background />} />
              <Route path="idea" element={<Project2Idea />} />
              <Route path="implementation" element={<Project2Implementation />} />
              <Route path="result" element={<Project2Result />} />
            </Route>

            <Route path="project3">
              <Route index element={<Project3 />} />
              <Route path="background" element={<Project3Background />} />
              <Route path="idea" element={<Project3Idea />} />
              <Route path="implementation" element={<Project3Implementation />} />
              <Route path="result" element={<Project3Result />} />
            </Route>

            <Route path="communication" element={<Communication />} />
            <Route path="tutorial" element={<Tutorial />} />

            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </NavigationProvider>
    </Router>
  );
}

export default App;
