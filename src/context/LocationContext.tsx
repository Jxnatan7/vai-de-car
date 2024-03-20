import React, { createContext, useContext, useState, useEffect } from 'react';
import Geolocation, { GeolocationResponse } from '@react-native-community/geolocation';

const LocationContext = createContext<GeolocationResponse | null>(null);

export const LocationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [location, setLocation] = useState<GeolocationResponse | null>(null);

    useEffect(() => {
        const getLocation = () => {
            Geolocation.getCurrentPosition(
                position => {
                    setLocation(position);
                },
                error => console.log(error),
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
            );
        };

        getLocation();
    }, []);

    return (
        <LocationContext.Provider value={location}>
            {children}
        </LocationContext.Provider>
    );
};

export const useLocation = () => useContext(LocationContext);

