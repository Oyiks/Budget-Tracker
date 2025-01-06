import styled from "styled-components";
import { IoIosCloseCircle } from "react-icons/io";
import Dashboard from "./Dashboard";
import { useState} from "react";
import { updateAmount} from "./Amount"
import { useDispatch } from "react-redux";
import { updateExpense } from "./expensesName";
import { updateCategory } from "./category";
// import { useNavigate } from "react-router-dom";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background-color: rgba(0, 0, 0, 0.95);
`

const Modal = styled.div`
    padding: 20px 250px;
    position: relative;
    width: 100%;
    align-items: center;
`

const Input = styled.input.attrs({
    type: 'text',
})` 
    padding: 20px 20px;
    margin: 0px 0;
    width: 472px;
    box-sizing: border-box;  
    border: none;
    border-bottom: 2px solid white;
    display: inline-block;
    background-color: transparent;
    margin-top: 15px;
    color: white;
    font-size: 30px;
    align-items: center;

    &::placeholder {
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 2.999px;
        text-transform: capitalize;
        margin-bottom: 10px;

        @media (max-width: 480px) {
            color: var(--main-dark-main-20, #A3A3A3);
            font-size: 20.53px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 2.053px;
            text-transform: capitalize;
            text-align: center;
        }
    }
    `

    const Button = styled.button`
        border-radius: 4px;
        background: var(--complementaries-compl-opt1, #FFE600);
        padding: 12px 118px 11px 119px;
        margin-top: 40px;
        cursor: pointer;
        align-items: center;
        font-weight: 700;

    @media (max-width: 480px) {
        padding: 17px 88px 16px 88px;
        border-radius: 2.738px;
        background: var(--complementaries-compl-opt1, #FFE600);
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }
`

    const Select = styled.select.attrs({
        type: 'text',
    })`
        width: 472px;
        margin-top: 40px;
        box-sizing: border-box;
        height: 40px;
        /* border-radius: 3px; */
        border-bottom: 2px solid white;
        color: var(--extras-box-color-light, #FFFDE7);
        padding: 4px 4px 4px 2px;
        background-color: transparent;

    `

        const Options = styled.option`
        background-color: black;
        /* color: white; */
        font-size: 24px;
    `

    const H1 = styled.h1`
    text-align: center;
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

const AddedColor = styled.span`
    color: #51D289;
`

const Paragraph = styled.p`
color: white;
text-align: center;
`

const Form = styled.form`
    padding: 10px 190px 20px 190px;    
    align-items: center;
    /* background-color: var(--main-dsrk-base, #1E1E1E); */

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

const ClosedButton = styled(IoIosCloseCircle)`
        height: 50px;
        width: 50px;
        color: var(--complementaries-compl-opt1, #FFE600);

        position: absolute;
        top: 10px;
        right: 10px;
        background: transparent;
        border: none;
        font-size: 24px;
        cursor: pointer;
    `

function ExpensesModal({ showModal, handleClose}) {

    const [amount, setAmount] = useState('');
    const [expense, setExpense] = useState('');
    const [category, setCategory] = useState('');

    // const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
        console.log(amount);
    };

    const handleExpensesChange = (e) => {
        setExpense(e.target.value);
        console.log(expense);
    }

    const handleCategory = (e) => {
        setCategory(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        // Your custom submission logic here
        if(!amount) return null;
        dispatch(updateAmount(amount));

        if(!expense) return null;
        dispatch(updateExpense(expense));

        if(!category) return null;
        dispatch(updateCategory(category));

        handleClose();
      }

    return (
        <ModalOverlay>
            <Modal>
            <H1>MONTHLY <br /> 
            <AddedColor>BUDGET</AddedColor></H1>
            <Paragraph>
                Insert Below Your Current Spent
            </Paragraph>
            <Form onSubmit={handleSubmit}>
                <div>
                    {/* <label>Insert The Amount</label> */}
                    <Input
                        type='text' 
                        placeholder="Insert The Amount"
                        value={amount}
                        onChange={handleAmountChange}
                    />
                </div>
                <div>
                    {/* <label>Name for Expenses</label> */}
                    <Input
                        type='text' 
                        placeholder="Name For Expenses"
                        value={expense}
                        onChange={handleExpensesChange}
                    />
                </div>
                
                <div>
                <Select name="Expenses" value={category} onChange={handleCategory}>
                    <Options value="">Select Category</Options>
                    <Options value="All">All</Options>
                    <Options value="Debts">Debts</Options>
                    <Options value="Food">Food</Options>
                    <Options value="All">All</Options>
                    <Options value="Hobbie">Hobbie</Options>
                    <Options value="Rent">Rent</Options>
                    <Options value="Savings">Savings</Options>
                    <Options value="Medicine">Medicine</Options>
                    <Options value="Subscription">Subscription</Options>
                    <Options value="Various">Various</Options>
                </Select>
                </div>
                    
                <Button onClick={handleSubmit}>
                   Add New Expense
                </Button>
            </Form>

            <ClosedButton   
                onClick={handleClose} 
            />
            </Modal>
            {showModal && <Dashboard handleClose={handleClose} />}
        </ModalOverlay>
    )
}

export default ExpensesModal;
