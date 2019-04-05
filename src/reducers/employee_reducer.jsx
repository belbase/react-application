const EmployeeReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return state.concat([action.data]);
    case "FETCH_EMPLOYEE":
      return (state = action.data);
    case "DELETE_EMPLOYEE":
      return state.filter(item => {
        return item.id !== action.id;
      });
    default:
      return state;
  }
};

export default EmployeeReducer;
