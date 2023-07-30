import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import {AuthContext} from'../context/AuthContext';
import { useContext } from 'react';
// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext()
  const {user} = useContext(AuthContext);
  const handleClick = async () => {
    if (!user) {
      alert('Please log in to delete a workout')
      return
    }
    if (window.confirm('Are you sure you want to delete this workout?')) {
      const response = await fetch('https://workout-buddy-api-miii.onrender.com/api/v1/workouts/' + workout._id, {
        method: 'DELETE',
        headers: {'Authorization': `Bearer ${user.token}`}
      })
      const json = await response.json()
  
      if (response.ok) {
        dispatch({type: 'DELETE_WORKOUT', payload: json})
      }
    }

  }

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Reps: </strong>{workout.reps}</p>
      <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails