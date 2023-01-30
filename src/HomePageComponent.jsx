
//component mayuscula
export const UserComponent = (props) => {
    return (
      <div>
        <h1>
          <li>
          Buenas {props.name} {props.surname} de {props.age} años
          </li>
        </h1>
      </div>
    );
  };
  
  export const InfoComponent = (props) => {
    return <h2>Grup {props.integrante1} y {props.integrante2}</h2>;
  };

  export const InputComponent = (props) => {
    return (
      <div>
        <input type="text" placeholder={props.textoFondo} />
      </div>
    );
  };