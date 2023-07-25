import { useLogIn } from "../hooks/useLogIn"
import {useState} from 'react'
function Login() {
  const { postLogIn, loading, error } = useLogIn();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const handleSubmit =  async(e) => {
    e.preventDefault();
    await postLogIn(email,password);
  };
  return (
    <form className="signup" onSubmit={handleSubmit}>
    <h3>Login</h3>
        <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter email" />
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter password" />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit" disabled={loading}  className="btn btn-primary btn-block">Login</button>
    </form>
  )
}

export default Login
