import { Users } from "../../../Resources";

const SearchById = id => {
  for (var i = 0; i <= Users.length; i++) {
    if (Users[i].id === id) {
      return Users[i];
    }
  }
};

const SearchByIdAndOrg = (questionId, user) => {
  const questionAuthor = SearchById(questionId);

  for (var i = 0; i <= Users.length; i++) {
    if (questionAuthor.id === user.id) {
      return Users[i].name;
    }
    return Users[i].organization;
  }
};

const SearchByName = name => {
  if (name === null) {
    return null;
  } else {
    for (var i = 0; i <= Users.length; i++) {
      if (Users[i].name === name) {
        return Users[i];
      }
    }
  }
};

export { SearchById, SearchByName, SearchByIdAndOrg };
