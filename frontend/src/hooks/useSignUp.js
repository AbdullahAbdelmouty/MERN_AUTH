import {useState,useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
export const useSginUp = () => {
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);
    const { dispatch } = useContext(AuthContext);
    const postSignUp = async ({email,password}) => {
      setLoading(true);
      setError(null);
      const res = await fetch('https://workout-buddy-api-miii.onrender.com/api/v1/auth/signup',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({email,password}) 
      })
      const data = await res.json();
      console.log(data, "data");
      if(!res.ok){
        setError(data.error);
        setLoading(false);
      }
      if(res.ok){
        localStorage.setItem('user', JSON.stringify(data))
        dispatch({type:'LOGIN',payload:data});
        setLoading(false);
      }
}
return {postSignUp,loading,error}
}