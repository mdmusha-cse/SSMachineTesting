/**
 * @format
 */

import {AppRegistry , LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { Provider } from 'react-redux';
import configureStore from './src/helpers/Store';

LogBox.ignoreAllLogs();

const RNRedux = () => (
    <Provider store={configureStore}>
        <App />
    </Provider>
)
AppRegistry.registerComponent(appName, () => RNRedux);

// AppRegistry.registerComponent(appName, () => App);
