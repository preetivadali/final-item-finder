import { ListGroup } from "flowbite-react";

const ListFlowbite = () => {
  return (
    <div>
      <ListGroup className="w-screen rounded-none">
        {/* LATER: map through item array to render ListGroup.Item */}
        <ListGroup.Item className="text-zinc-500" >
          <div className="w-24 h-16 bg-[url(https://picsum.photos/100/100)] bg-cover"></div>

          <div className="flex ml-5 flex-col items-start">
            <p>headline</p>
          </div>
        </ListGroup.Item>

        <ListGroup.Item className="text-zinc-500" >
          <div>
          <div className="w-16 h-16 bg-[url(https://picsum.photos/100/100)] bg-cover"></div>
          </div>

          <div className="flex ml-5 flex-col items-start">
            <p>headline</p>
            <p>secondary text</p>
          </div>
        </ListGroup.Item>

        <ListGroup.Item className="text-zinc-500" >
          <div>
          <div className="w-16 h-16 bg-[url(https://picsum.photos/100/100)] bg-cover"></div>
          </div>

          <div className="flex ml-5 flex-col items-start">
            <p>headline</p>
            <p>secondary text</p>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default ListFlowbite
