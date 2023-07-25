
function SignUp() {
  return (
    <div>
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
        </form>
    </div>
  )
}

export default SignUp
