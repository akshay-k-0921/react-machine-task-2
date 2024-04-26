import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FoodMenu from '../pages/FoodMenu';
import Header from '../components/Header';
import CategoryBar from '../components/CategoryBar';
import { useNavigate } from 'react-router-dom';

const MainRoute = () => {
  return (
    <Router>
      <Header />
      <CategoryBar />
      <Routes>
        <Route path="/" element={<Navigator to="/11" />} />

        <Route path="/:id" element={<FoodMenu />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

const Navigator = ({ to }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate(to);  // Navigate to the specified route
  }, [navigate, to]);

  return null;  // Return null because this component doesn't render anything
};

const NotFound = () => {
  return <div>404 - Not Found</div>;
};

export default MainRoute;
