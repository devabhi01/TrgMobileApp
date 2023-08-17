/**
 * @format
 */
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';

const AppWrapper=()=>{
    
        <App />
}

AppRegistry.registerComponent(appName, () => AppWrapper);
