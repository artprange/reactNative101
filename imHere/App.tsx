import { StatusBar } from 'expo-status-bar';
import Home from "./src/screens/Home";


export default function App() {
  return(

    /*statusbar não precisa no iphone, mas no android sim*/

    <>
      <StatusBar
      style="light"
      backgroundColor='transparent'
      translucent
    
       /> 

    <Home />
    </>

  )
 
}