import { useEffect }from 'react'
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import {AuthContext} from'../context/AuthContext';
import { useContext } from 'react';
// components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
  const {workouts, dispatch} = useWorkoutsContext()
  const {user} = useContext(AuthContext);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:5000/api/v1/workouts',
        {method: 'GET', headers: {'Authorization': `Bearer ${user.token}`}}
      )
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    if (user) {
      fetchWorkouts()
    }
  }, [dispatch, user])

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home