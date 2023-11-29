import { ListGroup } from "flowbite-react";

const ListFlowbite = () => {
  return (
    <div>
      <ListGroup className="w-screen rounded-none">
        {/* LATER: map through item array to render ListGroup.Item */}
        <ListGroup.Item className="text-zinc-500" >
          <div>
            <p>thumbnail</p>
          </div>

          <div className="flex ml-5 flex-col items-start">
            <p>headline</p>
            <p>secondary text</p>
          </div>
        </ListGroup.Item>

        <ListGroup.Item className="text-zinc-500" >
          <div>
            <p>thumbnail</p>
          </div>

          <div className="flex ml-5 flex-col items-start">
            <p>headline</p>
            <p>secondary text</p>
          </div>
        </ListGroup.Item>

        <ListGroup.Item className="text-zinc-500" >
          <div>
            <p>thumbnail</p>
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
