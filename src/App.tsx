import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";
import styled from "styled-components";

interface TypeInputs {
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
}

function App() {
  const [inputValues, setInputValues] = useState<TypeInputs>({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
  });
  const [firstNameError, setFirstNameEroor] = useState(false);
  const [lastNameError, setlastNameEroor] = useState(false);
  const [emailError, setEmailEroor] = useState(false);
  const [passwordError, setPasswordEroor] = useState(false);

  const HandleSubmit = function (event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let passed = true;

    if (!inputValues.FirstName) {
      setFirstNameEroor(true);
      passed = false;
    }
    if (!inputValues.LastName) {
      setlastNameEroor(true);
      passed = false;
    }
    if (!inputValues.Email) {
      setEmailEroor(true);
      passed = false;
    }
    if (!inputValues.Password) {
      setPasswordEroor(true);
      passed = false;
    }

    if (passed === true) {
      setInputValues({
        FirstName: "",
        LastName: "",
        Email: "",
        Password: "",
      });
    }
  };

  const HandleChange = function (event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    name == "FirstName" && setFirstNameEroor(false);
    name == "LastName" && setlastNameEroor(false);
    name == "Email" && setEmailEroor(false);
    name == "Password" && setPasswordEroor(false);

    setInputValues({ ...inputValues, [name]: value });
  };

  return (
    <Container>
      <div className="leftSide">
        <h1 className="title">
          Learn to code by<br></br> watching others
        </h1>
        <h2 className="comment">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.{" "}
        </h2>
      </div>
      <div className="rightSide">
        <div className="Try">
          <h1 className="therafter">
            Try it free 7 days then $20/mo. thereafter
          </h1>
        </div>
        <form onSubmit={HandleSubmit}>
          <MyInput
            placeholder="FirstName"
            name="FirstName"
            onChange={HandleChange}
            value={inputValues.FirstName}
            style={firstNameError ? { border: "solid 1px red" } : {}}
          />
          {firstNameError && (
            <ErrorMessage>First Name cannot be empty</ErrorMessage>
          )}
          <MyInput
            placeholder="LastName"
            name="LastName"
            onChange={HandleChange}
            value={inputValues.LastName}
            style={lastNameError ? { border: "solid 1px red" } : {}}
          />
          {lastNameError && (
            <ErrorMessage>Last Name cannot be empty</ErrorMessage>
          )}
          <MyInput
            placeholder="Email"
            name="Email"
            onChange={HandleChange}
            value={inputValues.Email}
            style={emailError ? { border: "solid 1px red" } : {}}
          />
          {emailError && (
            <ErrorMessage style={{ right: "12px" }}>
              Email cannot be empty
            </ErrorMessage>
          )}
          <MyInput
            placeholder="Password"
            type="password"
            name="Password"
            onChange={HandleChange}
            value={inputValues.Password}
            style={passwordError ? { border: "solid 1px red" } : {}}
          />
          {passwordError && (
            <ErrorMessage>Password cannot be empty</ErrorMessage>
          )}
          <button className="submit-btn" type="submit">
            <h1 className="Submit-text">CLAIM YOUR FREE TRIAL</h1>
          </button>
          <h1 className="footer">
            By clicking the button, you are agreeing to our{" "}
            <span className="Terms">Terms and Services</span>
          </h1>
        </form>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;

  .title {
    font-size: 50px;
    font-weight: 700;
    line-height: 55px;
    letter-spacing: -0.5208333134651184px;
    color: white;
  }
  .comment {
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    color: white;
    margin-right: 20px;
    margin-top: 20px;
  }
  .leftSide {
    width: 525px;
    text-align: left;
  }

  .rightSide {
    width: 540px;
  }
  .Try {
    background-color: #5e54a4;
    text-align: center;
    border-radius: 8px;
    padding-block: 12px;
  }
  .therafter {
    font-size: 15px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0.2678571045398712px;
    color: white;
  }

  form {
    background-color: white;
    border-radius: 8px;
    padding-inline: 25px;
    text-align: center;
    padding-top: 30px;
    margin-top: 20px;
    padding-bottom: 30px;
  }

  .Submit-text {
    font-size: 15px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 1px;
    color: white;
  }

  .submit-btn {
    background-color: #38cc8b;
    border: none;
    border-radius: 6px;
    padding-block: 10px;
    padding-inline: 40px;
    padding-inline: 142px;
    margin-top: 20px;
  }
  .footer {
    font-size: 11px;
    font-weight: 500;
    line-height: 26px;
    text-align: center;
    color: #bab7d4;
    margin-top: 10px;
  }
  .Terms {
    color: orange;
  }
`;

const MyInput = styled.input`
  width: 460px;
  height: 56px;
  margin-top: 20px;
  border-radius: 7px;
  border: solid 1px gray;
  padding-left: 15px;
`;

const ErrorMessage = styled.p`
  width: 158px;
  height: 17px;
  color: red;
  font-size: 10px;
  position: relative;
  top: 6px;
`;

export default App;
