import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './App';
import PrivateRoute from './components/PrivateRoute';
import Register from './pages/Register';
import AddContent from './pages/AddContent';
import Admin from './pages/Admin';
import Navbar from '../src/components/Layout/AdminHeader/Navbar';

const PageRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/editmenu"
                    element={
                        <PrivateRoute>
                            <Navbar />
                            <AddContent />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/admin"
                    element={
                        <PrivateRoute>
                            <Navbar />
                            <Admin />
                        </PrivateRoute>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
};

export default PageRouter;
