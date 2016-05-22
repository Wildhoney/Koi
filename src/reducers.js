import { combineReducers } from 'redux';
import world from './reducers/world';
import scene from './reducers/scene';

export default combineReducers({
    scene,
    world
});
