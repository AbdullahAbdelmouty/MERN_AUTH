import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useWorkoutsContext } from "./useWorkoutsContext";
export const useLogOut = () => {
    const { dispatch } = useContext(AuthContext);
    const {dispatch:dispatchWorkouts} = useWorkoutsContext()
    const logOut = ()=> {
        localStorage.removeItem('user');
        dispatch({type:'LOGOUT'});
        dispatchWorkouts({ type: 'SET_WORKOUTS', payload: null })
    }
    
    return {logOut}
}
