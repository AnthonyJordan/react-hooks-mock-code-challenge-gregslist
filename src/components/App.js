import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchString, setSearchString] =useState("")
function setSearch(newSearch){
  setSearchString(newSearch)
}
  return (
    <div className="app">
      <Header onSearch={setSearch}/>
      <ListingsContainer searchString={searchString}/>
    </div>
  );
}

export default App;
