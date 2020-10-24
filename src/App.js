import './App.css';
import AppContainer from './components/containers/AppContainer/AppContainer';
import CharacterProvider from './state/CharacterState/CharacterContext';

function App() {
  return (
    <CharacterProvider>
      <AppContainer />
    </CharacterProvider>
  );
}

export default App;
