import LoginModal from "./components/LoginModal";
import ListOneLine from "./lib/ListOneLine";
import ListTwoLine from "./lib/ListTwoLine";

const App = () => {
  return (
    <div className="md:container md:mx-auto">
      <LoginModal />
      <ListOneLine />
      <ListOneLine />
      <ListTwoLine />
      <ListTwoLine />
    </div>
  );
};

export default App;
