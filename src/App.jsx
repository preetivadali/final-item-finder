import LoginModal from "./components/LoginModal";
import Login from "./components/Login";
import ButtonFlowbite from "./lib/ButtonFlowbite";
import ListGroup from "./lib/ListFlowbite";
import ListFlowbite from "./lib/ListFlowbite";

const App = () => {
  return (
    <div className="flex flex-col max-w-full min-h-screen justify-center items-center bg-emerald-500">
      <p>logo</p>
      {/* <ButtonFlowbite /> */}
      <ListFlowbite />
    </div>
  );
};

export default App;
