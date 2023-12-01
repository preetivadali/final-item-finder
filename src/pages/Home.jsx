// list of newly added items
// map through items and sort by newest
// copy html structure in CustomList.jsx

import { useSelector } from "react-redux";
import { ListGroup } from "flowbite-react";
import TopAppBar from "../lib/TopAppBar";

const Home = () => {
  const items = useSelector((store) => store.items);
  console.log(items);

  return (
    <>
      <TopAppBar>Recently listed items</TopAppBar>
      <ListGroup className="w-screen rounded-none">
        {items.map(({ title, desc, id}) => (
          <ListGroup.Item className="text-zinc-500" key={id}>
          <div>
            <div className="w-16 h-16 bg-[url(https://picsum.photos/100/100)] bg-cover"></div>
            </div>

          <div className="flex ml-5 flex-col items-start">
            <p>{title}</p>
            <p>{desc}</p>
          </div>
        </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default Home;
