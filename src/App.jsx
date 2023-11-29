import LoginModal from "./components/LoginModal";
import ListOneLine from "./lib/ListOneLine";
import ListTwoLine from "./lib/ListTwoLine";
import TopAppBar from "./lib/TopAppBar";
import NavBar from "./lib/NavBar"

const App = () => {
  return (
    <div className="md:container md:mx-auto">
      <LoginModal />
      <TopAppBar />
      <ListOneLine />
      <ListOneLine />
      <ListTwoLine />
      <ListTwoLine />
      <NavBar />
    </div>
  );
};

export default App;
