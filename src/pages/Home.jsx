// list of newly added items
// map through items and sort by newest
// copy html structure in CustomList.jsx

import { useSelector, useDispatch } from "react-redux";
import { addFavorite } from "../reducers/itemSlice";
import { ListGroup, Button } from "flowbite-react";
import TopAppBar from "../lib/TopAppBar";
import Navbar from "../lib/BottomNavbar";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const Home = () => {
  const items = useSelector((store) => store.items);
  console.log(items);

  const dispatch = useDispatch();

  return (
    <>
      {/* <TopAppBar>Recently listed items</TopAppBar> */}
      {/* List of recently added items, should be sorted by newest */}
      <ListGroup className="w-screen rounded-none">
        {items.map(({ title, desc, id }) => (
          <ListGroup.Item as="div" className="text-zinc-500" key={id}>
            <div className="flex">
              <div className="w-16 h-16 bg-[url(https://picsum.photos/100/100)] bg-cover"></div>

              <div className="flex ml-5 flex-col justify-center">
                <p className="font-bold">{title}</p>
                <p className="font-normal">{desc}</p>
              </div>
            </div>

            <Button
              pill
              className="bg-transparent text-zinc-500 fixed right-0"
              onClick={() => dispatch(addFavorite())}
            >
              <MdOutlineFavoriteBorder />
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      {/* <Navbar /> */}
    </>
  );
};

export default Home;

{
  /* 
getting error for nesting button in button. ListGroup.Item is by default a button element
workaround by adding as="div" not working...

still need to test addFavorite action
*/
}
