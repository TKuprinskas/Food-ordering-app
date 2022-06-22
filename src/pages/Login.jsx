import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Auth.styles";
import Navigation from "../../src/components/Layout/AdminHeader/Navigation";

const Login = () => {
  const [userInputs, setUserInputs] = useState([]);
  const Navigate = useNavigate();

  return (
    <S.Section>
      <Navigation />
      <S.Container>
        <S.Form
          onSubmit={(e) => {
            e.preventDefault();

            fetch("http://localhost:3000/v1/auth/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userInputs),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.token) {
                  window.localStorage.setItem("token", data.token);
                  Navigate("/admin", { replace: true });
                  return alert(data.msg);
                }
                return alert(data.err);
              })
              .catch((err) => alert(err.message))
              .finally(() => e.target.reset());
          }}
        >
          <S.Title>Prisijungimas</S.Title>
          <S.Field>
            <S.Control>
              <label className="label">El.paštas</label>
              <input
                className="input"
                type="email"
                placeholder="jonas@jonaitis.lt"
                onChange={(e) =>
                  setUserInputs({
                    ...userInputs,
                    email: e.target.value.trim().toLowerCase(),
                  })
                }
                required
              />
            </S.Control>
          </S.Field>

          <S.Field>
            <S.Control>
              <label className="label">Slaptažodis</label>
              <input
                className="input"
                type="password"
                placeholder="* * * * * *"
                onChange={(e) =>
                  setUserInputs({
                    ...userInputs,
                    password: e.target.value,
                  })
                }
                required
              />
            </S.Control>
          </S.Field>

          <S.Field>
            <S.Control>
              <S.Button>PRISIJUNGTI</S.Button>
            </S.Control>
          </S.Field>
        </S.Form>
      </S.Container>
    </S.Section>
  );
};

export default Login;
