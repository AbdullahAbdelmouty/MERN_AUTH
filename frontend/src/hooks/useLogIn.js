import {useState,useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
export const useLogIn = () => {
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);
    const { dispatch } = useContext(AuthContext);
    const postLogIn = async (email,password) => {
      setLoading(true);
      setError(null);
      const res = await fetch('http://localhost:5000/api/v1/auth/login',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({email,password}) 
      })
      const data = await res.json();
      console.log(data, "data");
      if(res.ok){
        localStorage.setItem('user', JSON.stringify(data))
        console.log("1");
        dispatch({type:'LOGIN',payload:data});
        setLoading(false);
      }
      if(!res.ok){
        setError(data.error);
        setLoading(false);
      }
}
return {postLogIn,loading,error}
}