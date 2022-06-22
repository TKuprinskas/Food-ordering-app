import styled from 'styled-components';

export const Section = styled.section``;

export const Container = styled.div`
    width: 75%;
    display: block;
    margin: 0 auto;
`;

export const Form = styled.form`
    margin: 0 auto;
`;

export const Field = styled.div`
    margin: 0 auto;
`;

export const Control = styled.div`
    width: 50%;
    margin: 0 auto;
    display: flex;
    padding: 0.5rem;
    input {
        width: 100%;
        padding: 0.2rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        text-indent: 5px;
        ::placeholder {
            text-indent: 5px;
        }
    }
    label {
        width: 40%;
        font-weight: bold;
        align-self: center;
    }
    textarea {
        width: 100%;
        padding: 0.2rem;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    select {
        width: 100%;
        padding: 0.2rem;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
`;

export const Button = styled.button`
    margin: 0 auto;
    width: 25%;
    type: submit;
    background-color: #00a8ff;
    border: none;
    border-radius: 4px;
    padding: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        background-color: orangered;
    }
`;

export const Title = styled.h1`
    text-align: center;
`;

export const Skills = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto;
    margin-top: 1rem;
`;

export const Box = styled.div`
    border: 1px solid #ccc;
    text-align: center;
    padding: 0.5rem;
    width: 30%;
    margin: 0.2rem;
`;
