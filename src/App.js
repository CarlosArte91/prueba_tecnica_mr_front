import { useSelector } from "react-redux";

import Form from "./components/form";
import Navbar from './components/navbar';

import styleApp from "./App.module.css";

function App() {
  const openCloseForm = useSelector(state => state.openCloseForm);
  
  return (
    <div className={styleApp.container}>
      <Navbar/>
      {openCloseForm && <div className={styleApp.formVehicle}><Form/></div>} 
    </div>
  );
};

export default App;