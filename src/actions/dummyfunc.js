
//most likely you will import the the function to make it do something
const dummyfunction = (data) =>{
    console.log(data);
}

var dummyfunc = data => {
  return function thunk(dispatch) {
    return dummyfunction(data);//the function will go here
  };
};

export default dummyfunc;
