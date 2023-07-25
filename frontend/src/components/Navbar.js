import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <div>
        <Link to="/signup">
          <button className="btn btn-primary">Sign Up</button>
          </Link>
          <Link to="/login">
          <button className="btn btn-primary">login</button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar