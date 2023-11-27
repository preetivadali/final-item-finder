"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Label, Modal, TextInput } from "flowbite-react";
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

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [loginData, setloginData] = useState({ username: "", password: "" });

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
        setIsOpen(false);
      }
    });
  };

  return (
    <>
      {login.token && <h1>{login.token}</h1>}
      <Button onClick={() => setIsOpen(true)}>Login</Button>
      <Modal
        dismissible
        show={isOpen}
        size="md"
        onClose={() => setIsOpen(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
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
                  setloginData({ ...loginData, username: event.target.value })
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
                  setloginData({ ...loginData, password: event.target.value })
                }
              />
            </div>
            <div className="w-full">
              <Button disabled={!isValid} onClick={() => handleConfirm()}>
                Confirm
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginModal;
