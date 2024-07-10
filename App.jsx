import Login from "./Feature/Login/Login.jsx";
import Menu from "./Feature/Menu/Menu.jsx";
import "./index.css"

const App = () => {
  return (
    <div className="flex flex-row gap-2 p-5">
      {dataFoods.map((food, index) => (
        <CardFood
          key={index}
          title={food.title}
          description={food.description}
          price={food.price}
          image={food.image}
        />
      ))}
    </div>
  );
}
export default App;
