import {useState} from 'react'
import { useSginUp } from '../hooks/useSignUp';
function SignUp() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {postSignUp,loading,error} = useSginUp();
  const handleSubmit =  async(e) => {
    e.preventDefault();
    await postSignUp({email,password});
    window.location.href = '/';
  };
  return (
    <form className="signup" onSubmit={handleSubmit}>
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
