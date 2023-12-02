import { Button } from "flowbite-react";

const CustomButton = ({ children, color, className, onClick, type }) => {
  return (
    <div>
      <Button
        color={color}
        className={className}
        onClick={onClick}
        type={type}
        pill
      >
        {children}
      </Button>
    </div>
  );
};

export default CustomButton;
