import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import LandingPage from './pages/LandingPage';
import ExplorePage from './pages/ExplorePage';
import RequestDetail from './pages/RequestDetail';
import CreateRequest from './pages/CreateRequest';
import AiCenter from './pages/AiCenter';
import Messages from './pages/Messages';
import Profile from './pages/Profile';
import Leaderboard from './pages/Leaderboard';
import Notifications from './pages/Notifications';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/request-detail" element={<RequestDetail />} />
        <Route path="/create-request" element={<CreateRequest />} />
        <Route path="/ai-center" element={<AiCenter />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </Router>
  );
}
export default App;