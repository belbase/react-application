const EmployeeReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return state.concat([action.data]);
    case "FETCH_EMPLOYEE":
      return (state = action.data);
    default:
      return state;
  }
};

export default EmployeeReducer;
