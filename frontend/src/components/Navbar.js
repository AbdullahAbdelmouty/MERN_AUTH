import { Link } from 'react-router-dom'
import { useLogOut } from '../hooks/useLogOut'
import {useAuthContext} from '../hooks/useAuthContext'

const Navbar = () => {
  const { logOut } = useLogOut();
  const handleLogOut = () => {
    logOut();
  }

  const {user} = useAuthContext();
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h2>Workout Buddy</h2>
        </Link>
        <nav>
          {user &&(<div>
            <span>{user.email}</span>
            <button className="btn btn-primary" onClick={handleLogOut}>Log Out</button>
          </div>)}
        {!user &&(<div>
        <Link to="/signup">
          <button className="btn btn-primary">Sign Up</button>
          </Link>
          <Link to="/login">
          <button className="btn btn-primary">login</button>
          </Link>
        </div>)}
        </nav>
      </div>
    </header>
  )
}

export default Navbar