import DataTable from "react-data-table-component";
import "./App.css";
import Articulo from "./component/Articulo";

function App() {
  return (
    <div className="App">
      <DataTable
        className="table"
        columns={[
          { name: "Hola", cell: (el) => <Articulo data={el}/> },
        ]}
        pagination
        data={[
          {
            title:"SHERK BIGOTES",
            imagen: "https://i.pinimg.com/474x/d3/65/50/d36550ea1b17394f63c2dff243fe636d.jpg",
            "article-description" : "loremadplkpoa sdkoamsdoamposdkaposkdpoaksdoakspodkaspodkpoaskdpoakspodaopskdpoaksp",
            author:"George Arellano Simbala",
          },
          {
            title:"GATO CELENE",
            imagen: "https://i.pinimg.com/550x/a1/df/ba/a1dfba11a131e32a1d7192bf24aaf84f.jpg",
            "article-description" : "loremadplkpoa sdkoamsdoamposdkaposkdpoaksdoakspodkaspodkpoaskdpoakspodaopskdpoaksp",
            author:"George Arellano Simbala",
          }
        ]}
      />
      
    </div>
  );
}

export default App;
