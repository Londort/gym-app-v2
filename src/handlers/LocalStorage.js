const LocalStorage = {
  getWorkouts() {
    return JSON.parse(localStorage.getItem('GymApp')) || [];
  },
  updateWorkouts(workouts) {
    return localStorage.setItem('GymApp', JSON.stringify(workouts));
  },
};

export default LocalStorage;
