// form to register new user

import { useSelector, useDispatch } from "react-redux";
import { Label, Card, TextInput } from "flowbite-react";
import { setIsNew } from "../reducers/registerSlice";
import CustomButton from "../lib/CustomButton";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  // empty form for now, need to add logic later

  return (
    <>
      <Card className="md:w-2/4 lg:w-1/4">
        <form className="space-y-2">
          <h3 className="text-xl mx-auto font-medium text-gray-900 dark:text-white">
            Register New User
          </h3>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput
              id="email"
              type="email"
              value="email"
              required
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="username" value="Username" />
            </div>
            <TextInput
              id="username"
              type="text"
              value="username"
              required
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Password" />
            </div>
            <TextInput
              id="password"
              type="password"
              value="password"
              required
            />
          </div>

          <div className="flex flex-col items-center gap-3">
            <CustomButton
              color="success"
              className="bg-emerald-500"
            >
              Confirm
            </CustomButton>
            <p className="text-xs">
              Already a member? Click <button className="underline" onClick={() => dispatch(setIsNew())} >here</button>
            </p>
          </div>
        </form>
      </Card>
    </>
  );
};

export default RegisterForm;
