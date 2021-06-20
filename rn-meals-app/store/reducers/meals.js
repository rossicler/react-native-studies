import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/meals";

const initialState = {
  allMeals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        state = { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const mealToAdd = state.allMeals.find(
          (meal) => meal.id === action.mealId
        );
        state = {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(mealToAdd),
        };
      }
      break;
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const updatedFilteredMeals = state.allMeals.filter((meal) => {
        if (
          (appliedFilters.glutenFree && !meal.isGlutenFree) ||
          (appliedFilters.lactoseFree && !meal.isLactoseFree) ||
          (appliedFilters.vegetarian && !meal.isVegetarian) ||
          (appliedFilters.vegan && !meal.isVegan)
        ) {
          return false;
        }
        return true;
      });
      state = { ...state, filteredMeals: updatedFilteredMeals };

    default:
      break;
  }
  return state;
};

export default mealsReducer;
