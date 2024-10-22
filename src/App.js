import './App.css';

function App() {

  function getTitle(title){
    return title;
  }

  const welcome = {
    greeting: 'Hey',
    title: 'React'
  };

  return (
    <div>
      <h1>
        {welcome.greeting} {getTitle('React')}!
      </h1>

      <label htmlFor='search'>Search: </label>
      <input id='search' type='text'></input>
    </div>
  );
}

export default App;
