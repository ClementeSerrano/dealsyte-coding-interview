import { Users } from "../../../Resources";

export default id => {
  for (var i = 0; i <= Users.length; i++) {
    if (Users[i].id === id) {
      return Users[i].name;
    }
  }
};
