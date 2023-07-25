import React,{useState,useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import { authReducer } from '../context/AuthContext';
import { useSginUp } from '../hooks/useSignUp';
function SignUp() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {postSignUp,loading,error} = useSginUp();
  // const postSignUp = async () => {
  //   setLoading(true);
  //   setError(null);
  //   const res = await fetch('http://localhost:5000/api/v1/auth/signup',{
  //     method:'POST',
  //     headers:{
  //       'Content-Type':'application/json'
  //     },
  //     body:JSON.stringify({email,password}) 
  //   })
  //   const data = await res.json();
  //   console.log(data, "data");
  //   if(!res.ok){
  //     setError(data.error);
  //     setLoading(false);
  //   }
  //   if(res.ok){
  //     localStorage.setItem('user', JSON.stringify(data.token))
  //     dispatch({type:'LOGIN',payload:data.user});
  //     setLoading(false);
  //   }
  // }
  const handleSubmit =  (e) => {
    e.preventDefault();
    postSignUp({email,password});
  };
  return (
    <form className="signup" onClick={handleSubmit}>
    <h3>Sign Up</h3>
        <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter email" />
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter password" />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit" disabled={loading} className="btn btn-primary btn-block">Sign Up</button>
    </form>
  )
}

export default SignUp
