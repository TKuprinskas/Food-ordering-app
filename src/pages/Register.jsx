import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Auth.styles";
import Navigation from "../../src/components/Layout/AdminHeader/Navigation";

const Register = () => {
  const [userInputs, setUserInputs] = useState([]);
  const Navigate = useNavigate();

  return (
    <S.Section>
      <Navigation />
      <S.Container>
        <S.Form
          onSubmit={(e) => {
            console.log(process.env.REACT_APP_BASE_URL);
            e.preventDefault();

            fetch("http://localhost:3000/v1/auth/register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userInputs),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data) {
                  alert(data.msg);
                  setUserInputs("");
                  Navigate("/login", { replace: true });
                }
              })
              .catch((err) => alert(err.message))
              .finally(() => e.target.reset());
          }}
        >
          <S.Title>Registracija</S.Title>
          <S.Field>
            <S.Control>
              <label className="label">Vardas</label>
              <input
                className="input"
                type="text"
                placeholder="Jonas"
                onChange={(e) =>
                  setUserInputs({
                    ...userInputs,
                    first_name: e.target.value.trim().toLowerCase(),
                  })
                }
                required
              />
            </S.Control>
          </S.Field>
          <S.Field>
            <S.Control>
              <label className="label">Pavardė</label>
              <input
                className="input"
                type="text"
                placeholder="Jonaitis"
                onChange={(e) =>
                  setUserInputs({
                    ...userInputs,
                    last_name: e.target.value.trim().toLowerCase(),
                  })
                }
                required
              />
            </S.Control>
          </S.Field>
          <S.Field>
            <S.Control>
              <label className="label">Telefono numeris</label>
              <input
                className="input"
                type="number"
                placeholder="861234567"
                onChange={(e) =>
                  setUserInputs({
                    ...userInputs,
                    phone_number: e.target.value.trim().toLowerCase(),
                  })
                }
                required
              />
            </S.Control>
          </S.Field>
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
              <S.Button>REGISTRUOTIS</S.Button>
            </S.Control>
          </S.Field>
        </S.Form>
      </S.Container>
    </S.Section>
  );
};

export default Register;
