import { Users } from "../../../Resources";

const SearchById = id => {
  for (var i = 0; i <= Users.length; i++) {
    if (Users[i].id === id) {
      return Users[i].name;
    }
  }
};

const SearchByName = name => {
  for (var i = 0; i <= Users.length; i++) {
    if (Users[i].name === name) {
      return Users[i];
    }
  }
};

export { SearchById, SearchByName };
