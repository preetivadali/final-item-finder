import LoginModal from "./components/LoginModal";
import ListOneLine from "./lib/ListOneLine";
import ListTwoLine from "./lib/ListTwoLine";
import TopAppBar from "./lib/TopAppBar";

const App = () => {
  return (
    <div className="md:container md:mx-auto">
      <LoginModal />
      <TopAppBar />
      <ListOneLine />
      <ListOneLine />
      <ListTwoLine />
      <ListTwoLine />
    </div>
  );
};

export default App;
