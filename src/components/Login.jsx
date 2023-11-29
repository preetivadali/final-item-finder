"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Label, Card, TextInput } from "flowbite-react";
import { getToken } from "../reducers/loginSlice";

/*
Example of using login token to fetch data:

fetch('URL', {
  method: 'GET',
  headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': login.token_type + ' ' + login.access_token
  })
})
*/

const Login = () => {
  const [isValid, setIsValid] = useState(true);
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);

  useEffect(() => {
    if (loginData.username.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [loginData.username]);

  const handleConfirm = () => {
    dispatch(getToken(loginData)).then(() => {
      if (login.access_token.length > 1) {
        setIsOpen(false); // what happens instead of modal closing?? navigate to home pg?
      }
    });
  };
  
  return (
    <>
      {login.token && <h1>{login.token}</h1>}
      <Card>
          <div className="space-y-4">
            <h3 className="text-xl mx-auto font-medium text-gray-900 dark:text-white">
              Login
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username" value="Username" />
              </div>
              <TextInput
                id="username"
                value={loginData.username}
                onChange={(event) =>
                  setLoginData({ ...loginData, username: event.target.value })
                }
                required
                color={!isValid && "failure"}
                helperText={!isValid && "Please enter a username"}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput
                id="password"
                type="password"
                value={loginData.password}
                onChange={(event) =>
                  setLoginData({ ...loginData, password: event.target.value })
                }
              />
            </div>
            <div className="w-full mx-auto">
              <Button disabled={!isValid} onClick={() => handleConfirm()}>
                Confirm
              </Button>
            </div>
          </div>
      </Card>
    </>
  );
};

export default Login;
