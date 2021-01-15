import React, { useState } from 'react'
import axios from 'axios'

import Search from './components/Search'
import Results from './components/Results'

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });
  //const apiurl = "https://api.themoviedb.org/3/movie/550?api_key=b807a25540eb93dedd8fffc199199b9b";
  const apiurl = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" 

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + e.target.value + "&s=" + state.s).then(({ data }) => {
        console.log(data)
        let results = data.results;
        console.log(results)
        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }
  
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }
  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />

        <Results results={state.results} />
     
      </main>
    </div>
  );
}

export default App
