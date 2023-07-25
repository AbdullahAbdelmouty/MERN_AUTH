
function SignUp() {
  return (
    <form className="signup">
    <h3>Sign Up</h3>
        <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
    </form>
  )
}

export default SignUp
