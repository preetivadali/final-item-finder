import { ListGroup } from "flowbite-react";

const ListFlowbite = () => {
  return (
    <div>
      <ListGroup className="w-80 h-20 flex items-center">
        <ListGroup.Item>
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
