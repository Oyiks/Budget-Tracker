import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { updateName } from './users';
import { useDispatch } from 'react-redux';
import { updateGoals } from './Goals';
import { updateIncome } from './Income';
// import { updateProgress } from './progress';

const Input = styled.input.attrs({
    type: 'text',
})`
    padding: 10px 20px;
    margin: 0px 0;                      
    width: 472px;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid white;
    display: inline-block;
    background-color: transparent;
    margin-top: 50px;
    color: white;
    font-size: 30px;

    &::placeholder {
        font-size: 29.991px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 2.999px;
        text-transform: capitalize;
        margin-bottom: 26px;

        @media (max-width: 480px) {
            color: var(--main-dsrk-main-20, #A3A3A3);
            font-size: 20.53px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 2.053px;
            text-transform: capitalize;
            text-align: center;
        }
    }

    @media (max-width: 480px) {
        width: auto;
        height: auto;
        flex-shrink: 0;
        margin-top: 48px;
        overflow: hidden;
    }
`

const Button = styled.button`
    border-radius: 4px;
    background: var(--complementaries-compl-opt1, #FFE600);
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.04);
    padding: 12px 118px 11px 119px;
    margin-top: 90px;
    cursor: pointer;

    @media (max-width: 480px) {
        padding: 17px 88px 16px 88px;
        border-radius: 2.738px;
        background: var(--complementaries-compl-opt1, #FFE600);
        /* display: inline-flex; */
        justify-content: center;
        align-items: center;

    }
`

const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: baseline;
    height: 100vh;
    overflow: hidden;

    @media (max-width: 480px) {
        overflow: hidden;
        padding: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        /* overflow-y: hidden; */
        width: 100%;
    }
`

const Form = styled.form`
    display: flex;
    width: 50%;
    height: 100vh;
    padding: 10px 120px 20px 120px;

    justify-content: center;
    align-items: center;
    background-color: var(--main-dsrk-base, #1E1E1E);

    @media (max-width: 480px) {
    display: flex;
    width: auto;
    height: 100vh;
    padding: 106px 27px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
`

const H1 = styled.h1`
    font: 59.964px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    text-transform: capitalize;
    color: var(--extras-box-color-light, #FFFDE7);

    @media (max-width: 480px) {
        text-align: center;
    }
`;

const ImageContainer = styled.div`
    width: 100%;
`

const Image = styled.img`
    width: 100%;
    height: 100vh;

    @media (max-width: 480px) {
        visibility: none;
    }
`

const AddedColor = styled.span`
    color: #51D289;
`

const ErrorText = styled.p`
    color: red;
    font-size: 14px;
    margin-top: 10px;
`;

function Homepage() {
    const [income, setIncome] = useState('');
    const [username, setUsername] = useState('');
    const [goals, setGoals] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleIncomeChange = (e) => {
        setIncome(e.target.value);
    };

    const handleNameChange = (e) => {
        setUsername(e.target.value);
    }
    
    const handleGoalChange = (e) => {
        setGoals(e.target.value);
    }

    const validateForm = () => {
        // Check if all fields are filled
        if (!username || !goals || !income) {
            setError('All fields are required!');
            return false;
        }

        // Validate income is a valid number
        if (isNaN(income)) {
            setError('Income must be a valid number!');
            return false;
        }

        // Validate username contains only letters and spaces (no numbers, special characters)
        const nameRegex = /^[A-Za-z\s]+$/; // Only alphabet and spaces
        if (!nameRegex.test(username)) {
            setError('Name must contain only letters and spaces!');
            return false;
        }

        setError('');
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Run validation before submitting
        if (!validateForm()) {
            return;
        }

        // Dispatch actions if form is valid
        dispatch(updateName(username));
        dispatch(updateGoals(goals));
        dispatch(updateIncome(income));

        // const progress = 50;


        // Navigate after successful submission
        navigate('/dashboard')
    }

    return (
        <>
        <Main>
        <ImageContainer>
            <Image src='/images/Homepage_image.png' />
        </ImageContainer>

        <Form onSubmit={handleSubmit}>
        <div>
            <H1>Monthly <AddedColor>Budget</AddedColor></H1>
            <Input
            type='text' 
            placeholder="Insert Your Income"
            value={income}
            onChange={handleIncomeChange}
            />
            <Input 
            placeholder="Insert Your Name" 
            value={username}
            onChange={handleNameChange}
            />
            <Input 
            placeholder="Insert Your Goals" 
            value={goals}
            onChange={handleGoalChange}
            />

            {/* Display error message if any */}
            {error && <ErrorText>{error}</ErrorText>}

            <Button>
                Start Your Calculation
            </Button>
        </div>
        </Form>
        </Main>
        </>
    )
}

export default Homepage;
