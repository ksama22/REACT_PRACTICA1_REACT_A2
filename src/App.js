import './App.css';
import { InfoComponent, UserComponent, InputComponent } from './HomePageComponent'

function App() {
  return (
    <div className="App">
      <InfoComponent integrante1="Kevin Sama" integrante2="Raul Rufo" />
      <UserComponent name="Kevin" surname="Sama" age="18" />
      <UserComponent name="Raul" surname="Rufo" age="18" />
    

      <InputComponent textoFondo="Texto Fondo 1" />
      <InputComponent textoFondo="Texto Fondo 2" />
      <InputComponent textoFondo="Texto Fondo 3" />
    </div>
  );
}

export default App;
