import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import {dispatchWorkouts} from '../context/WorkoutsContext'
export const useLogOut = () => {
    const { dispatch } = useContext(AuthContext);
    const logOut = ()=> {
        localStorage.removeItem('user');
        dispatch({type:'LOGOUT'});
        dispatchWorkouts({ type: 'SET_WORKOUTS', payload: null })
    }
    
    return {logOut}
}
