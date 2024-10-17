import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: 'car',
  initialState: {
    searchTerm: '',
    data: [],
    totalCost: 0
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload
    },
    addCar(state, action) {
      // Assumption
      // action.payload = {name: 'ab', cost: 12}
      state.data.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost
      });
    },
    removeCar(state, action) {
      // Assumption
      // action.payload = id of the car that you want to remove
      const updated = state.data.filter((car) => {
        return car.id !== action.payload
      });
      state.data = updated;
    }
  }
});

export const {changeSearchTerm, addCar, removeCar} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;