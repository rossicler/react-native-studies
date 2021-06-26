import { ADD_PLACE, SET_PLACES } from "../actions/places";
import Place from "../../models/place";

const initialState = {
  places: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLACES:
      state = {
        places: action.places.map(
          (pl) => new Place(pl.id.toString(), pl.title, pl.imageUri)
        ),
      };
      break;
    case ADD_PLACE:
      const newPlace = new Place(
        action.placeData.id,
        action.placeData.title,
        action.placeData.image
      );
      state = { places: state.places.concat(newPlace) };
      break;
  }
  return state;
};
