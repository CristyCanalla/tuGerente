import styles from "./App.module.css";
import Dropdown from "./components/Dropdown/Dropdown";
import logo from './splash.png'
function App() {
  return (
    <div className="App">
      <div className={styles.app__dropdown}>Componente-Dropdown</div>
      <Dropdown field="nombre" />
      <div className={styles["app__test-text"]}>
      <br></br>
      <br></br>
        <img src={logo} alt="logo" id="logo" /><br></br>
      Desarrollar usando reactjs un componente de tipo dropdown (o combobox) <br></br>
- Al desplegarlo consultará a un servicio de firebase buscando coincidencias según el texto escrito (o sin filtro, en caso de que no se haya escrito texto).<br></br>
- El modelo en firebase consistirá de los siguientes atributos:
1. nombre
2. razón social
3. nit
4. teléfono
5. código<br></br>
- Debe solicitar resultados paginados de 20 en 20, y solo deberá traer la siguiente página cuando se esté scrolleando cerca al final de la lista actual de resultados.
<br></br>- Debe permitir parametrizar por qué atributo del objeto se buscará. La parametrización se debe hacer por código, no en tiempo de ejecución
<br></br>- El primer resultado del dropdown debe ser una opción fija que al darle click levante un pequeño pop-up, parte del componente, que permita agregar un nuevo objeto con el texto ya ingresado, pero permitiendo editarlo antes de guardar también.
<br></br>- El proyecto debe correrse en un contenedor de docker
<br></br>- Adjuntar también dentro del repositorio, capturas de pantalla de la solución funcionando
      </div>
    </div>
  );
}

export default App;
