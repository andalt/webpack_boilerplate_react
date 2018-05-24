import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import AppConfigureRoutes from './AppConfigureRoutes';

function AppRoot({ history }) {
    return (
        <ConnectedRouter history={history}>
            <AppConfigureRoutes />
        </ConnectedRouter>
    );
}

AppRoot.propTypes = {
    history: PropTypes.object
};

export default AppRoot;

