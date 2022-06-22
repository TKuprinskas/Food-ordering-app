import React, { useState } from 'react';
import * as S from './Auth.styles';

const AddContent = () => {
    const token = window.localStorage.getItem('token');
    const [userInputs, setUserInputs] = useState([]);

    const [selectedDay, setSelectedDay] = useState('Pirmadienis');
    const [day, setDay] = useState();

    const onChangeDay = (selectDay) => {
        const currentSelection = selectDay;
        setSelectedDay(currentSelection);
        setDay(currentSelection);
    };

    return (
        <S.Section>
            <S.Container>
                <S.Form
                    onSubmit={(e) => {
                        e.preventDefault();

                        fetch(
                            'https://6214c0d789fad53b1f1dc14a.mockapi.io/foodMenu',
                            {
                                method: 'POST',
                                headers: {
                                    authorization: `Bearer ${token}`,
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(userInputs),
                            }
                        )
                            .then((res) => res.json())
                            .then((data) => {
                                if (data) {
                                    alert('Patiekalas pridėtas prie meniu!');
                                    setUserInputs('');
                                    // Navigate("/", { replace: true });
                                }
                            })
                            .catch((err) => alert(err.message))
                            .finally(() => e.target.reset());
                    }}
                >
                    <S.Title>Pridėti Patiekalą į Meniu</S.Title>
                    <S.Field>
                        <S.Control>
                            <label className="label">Patiekalas</label>
                            <input
                                className="input"
                                type="text"
                                placeholder="Kijevo Kotletas"
                                onChange={(e) =>
                                    setUserInputs({
                                        ...userInputs,
                                        title: e.target.value.trim(),
                                    })
                                }
                                required
                            />
                        </S.Control>
                    </S.Field>

                    <S.Field>
                        <S.Control>
                            <label className="label">Garnyrai</label>
                            <input
                                className="input"
                                type="text"
                                placeholder="Pvz.: Gruzdintos bulvytės, morkų salotos"
                                onChange={(e) =>
                                    setUserInputs({
                                        ...userInputs,
                                        description: e.target.value.trim(),
                                    })
                                }
                                required
                            />
                        </S.Control>
                    </S.Field>

                    <S.Field>
                        <S.Control>
                            <label className="label">Kaina</label>
                            <input
                                className="input"
                                type="number"
                                max={20}
                                step={0.01}
                                placeholder="Pvz.: 3.50"
                                onChange={(e) =>
                                    setUserInputs({
                                        ...userInputs,
                                        price: e.target.value.trim(),
                                    })
                                }
                                required
                            />
                        </S.Control>
                    </S.Field>

                    <S.Field>
                        <S.Control>
                            <label className="label">Savaitės diena</label>
                            <select
                                value={selectedDay}
                                onChange={(e) => onChangeDay(e.target.value)}
                            >
                                <option value="Pirmadienis">Pirmadienis</option>
                                <option value="Antradienis">Antradienis</option>
                                <option value="Trečiadienis">
                                    Trečiadienis
                                </option>
                                <option value="Ketvirtadienis">
                                    Ketvirtadienis
                                </option>
                                <option value="Penktadienis">
                                    Penktadienis
                                </option>
                            </select>
                        </S.Control>
                    </S.Field>
                    <S.Field>
                        <S.Control>
                            <S.Button>PRIDĖTI</S.Button>
                        </S.Control>
                    </S.Field>
                </S.Form>
            </S.Container>
        </S.Section>
    );
};

export default AddContent;
