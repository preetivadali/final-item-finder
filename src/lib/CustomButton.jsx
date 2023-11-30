import { Button } from 'flowbite-react';

const CustomButton = ({ children, color, className }) => {
  return (
    <div>
      <Button color={color} className={className} pill >{children}</Button>
    </div>
  );
};

export default CustomButton;
