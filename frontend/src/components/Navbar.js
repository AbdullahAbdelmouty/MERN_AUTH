import { Link } from 'react-router-dom'
import { useLogOut } from '../hooks/useLogOut'
const Navbar = () => {
  const { logOut } = useLogOut();
  const handleLogOut = () => {
    logOut();
  }
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
          <div>
            <button className="btn btn-primary" onClick={handleLogOut}>Log Out</button>
          </div>
        <div>
        <Link to="/signup">
          <button className="btn btn-primary">Sign Up</button>
          </Link>
          <Link to="/login">
          <button className="btn btn-primary">login</button>
          </Link>
        </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar