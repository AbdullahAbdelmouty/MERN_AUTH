import { AuthContext } from "../context/AuthContext";
import { useWorkoutsContext } from "./useWorkoutsContext";
import { useContext } from "react";
export const useLogOut = () => {
    const { dispatch } = useContext(AuthContext);
    const { dispatch: dispatchWorkouts } = useWorkoutsContext();
    const logOut = ()=> {
        localStorage.removeItem('user');
        dispatch({type:'LOGOUT'});
        dispatchWorkouts({ type: 'SET_WORKOUTS', payload: null });
    }
    
    return {logOut}
}
