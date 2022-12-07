import Navbar from "./compo/navbar";
import Card from "./compo/card";
import data from "./compo/data";



 function App() {
  const card = data.map((item => {
    return(
      <Card
        item ={item}

            
           />
    )
  } ))

          
  return (
    <div className="container">
      <Navbar />
      {card}
      
      
      




    </div>
  )
}

      
      
      
    



export default App;
