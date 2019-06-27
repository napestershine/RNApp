import React from 'react';
import {Router, Stack} from 'react-native-router-flux';
// Replace "book" with the name of the resource type
import CuisineRoutes from './routes/cuisine';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root">
                {CuisineRoutes}
            </Stack>
        </Router>
    );
};

export default RouterComponent;