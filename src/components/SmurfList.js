import React from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf";

const SmurfList = (props) => {
  console.log("smurfList props", props);
  const { isFetching, id, name, position, nickname, description, smurfs } = props;
  const isLoading = isFetching;
  const testSmurf = {
    id: id,
    name: name,
    position: position,
    nickname: nickname,
    description: description,
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="listContainer">
      {smurfs.map((smurf, index) => {
        return <Smurf smurf={smurf} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
  };
};

export default connect(mapStateToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.
