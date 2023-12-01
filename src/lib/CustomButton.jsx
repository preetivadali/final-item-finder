import { Button } from 'flowbite-react';

const CustomButton = ({ children, color, className, onClick }) => {
  return (
    <div>
      <Button color={color} className={className} onClick={onClick} pill >{children}</Button>
    </div>
  );
};

export default CustomButton;
