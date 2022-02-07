import React , {Fragment} from "react";
import './App.css';
//components
import AddTrans from "./Components/AddTransaction";
import ListExpenditure from "./Components/List";


function App() {
  return (
    <Fragment>
      <div className="container">
        <AddTrans/>
        <ListExpenditure/>  
      </div>
    </Fragment>
  );
}

export default App;
