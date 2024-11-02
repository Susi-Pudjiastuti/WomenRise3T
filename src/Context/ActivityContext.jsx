// ActivityContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ActivityContext = createContext();

export const ActivityProvider = ({ children }) => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const response = await axios.get('API');
                const now = new Date();
                const active = response.data.filter(activity => new Date(activity.date) > now);
                const past = response.data.filter(activity => new Date(activity.date) <= now);
                setActivities(active);
                setHistory(past);
            } catch (error) {
                console.error('Error fetching activities:', error);
            }
        };
        fetchActivities();
    }, []);
    const [history, setHistory] = useState([]);
    const cancelActivity = (id) => {
        const canceledActivity = activities.find(activity => activity.id === id);
        if (canceledActivity) {
            setActivities(activities.filter(activity => activity.id !== id));
            setHistory([...history, { ...canceledActivity, status: 'cancelled' }]);
        }
    };

    return (
        <ActivityContext.Provider value={{ activities, history, cancelActivity }}>
            {children}
        </ActivityContext.Provider>
    );
};
