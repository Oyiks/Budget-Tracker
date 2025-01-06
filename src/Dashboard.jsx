import { MdOutlineSupervisedUserCircle } from "react-icons/md";
import styled from "styled-components";
import Card from './cards/CalculationCard';
import { BsCart2 } from "react-icons/bs";
import OptionalCard from './cards/OptionalCard';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import { useState, useRef} from "react";
import ExpensesModal from "./ExpenseModal";

const Main = styled.main`
padding: 10px 25px;
background-color: black;

@media (max-width: 768px) {
    padding: 32px;
}
`

const Navbar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
gap: 295px; 
color: white;

@media (max-width: 768px) {
    text-align: center;
    gap: 0px;
}

@media (max-width: 480px) {
    align-items: baseline;
    display: block;
}
`
const NavLeft = styled.div`
width: 50%;
display: flex;
justify-content: center;
align-items: center;
gap: 5px;

@media (max-width: 480px) {
    gap: 0px;
    width: 100%;
    padding: 0px;
    margin: 0px;
}
`

const NavRight = styled.div`
width: 50%;
text-align: right;
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
`

const Image = styled.img`
    cursor: pointer;
`

const H1 = styled.h1`
font-size: 30px;
font-style: normal;
font-weight: 800;
line-height: 0;
margin-top: 55px;
text-transform: capitalize;
color: var(--extras-box-color-light, #FFFDE7);
position: relative;

@media (max-width: 480px) {
    text-align: center;
}
`;

const H2 = styled.h2`
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-top: 55px;
text-transform: capitalize;
color: var(--extras-box-color-light, #FFFDE7);
position: relative;

@media (max-width: 480px) {
    text-align: center;
}
`;

const Heading2 = styled.h2`
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
/* margin-top: 5px; */
margin: 0px;
text-transform: capitalize;
color: var(--extras-box-color-light, #FFFDE7);

`;

const H3 = styled.h1`
font-size: 12px;
font-style: normal;
/* margin-bottom: 3px; */
line-height: 0;
text-transform: capitalize;
color: var(--complementaries-compl-opt1, #FFE600);
position: absolute;
/* top: 40; */
left: 270;
margin-top: 25px;

@media (max-width: 480px) {
    text-align: center;
}   
`;

const ExpensesButton = styled.button`
padding: 12px 20px;
border-radius: 4px;
background-color: var(--complementaries-compl-opt1, #FFE600);
box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.04);
cursor: pointer;
font-weight: 800;
border: none;

@media (max-width: 480px) {
    display: none;
}
`
const HR = styled.hr`
width: 95%;
height: 0.01px;
`
const HR2 = styled.hr`
width: 95%;
height: 0.1px;
border-style: dotted;
color: white;
`

const Paragraph = styled.p`
color: white;
`

const ParagraphDescription = styled.p`
color: white;
font-size: 12px;
margin: 0px;
line-height: 0.1;
`

const Select = styled.select`
width: 180px;
height: 30px;
border-radius: 3px;
border: 1px solid var(--complementaries-compl-opt1, #FFE600);
padding: 4px 4px 4px 2px;
color: var(--complementaries-compl-opt1, #FFE600);
background-color: transparent;
`

const Options = styled.option`
background-color: transparent;
`

const DescriptionBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 30px;
`

const Section = styled.section`
display: grid;
grid-template-columns: 2fr 1fr 1fr;
margin-top: 40px;
gap: 20px;

@media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
}

@media (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
}
`
const DescriptionText = styled.div`
 padding: 0 30px;
 text-align: center;

 @media (max-width: 480px) {
    padding: 0px;
}
`

const ExpenseDescription = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 10px;
`

const Cart = styled(BsCart2)`
width: 84px;
height: 84px;
color: white;
`

function Dashboard() {

    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [show, setShow] = useState(false);
    const ref = useRef(null);
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const [description, setDescription] = useState([]);


    const handleGoBack = () => {
        navigate(-1);
    };

    // const FlexParent = styled.div`

    //     display: grid;
    //     grid-template-columns: 1fr;

    //     @media (max-width: 768px) {
    //         display: flex;
    //         align-items: center;
    //         gap: 20px;
    //         margin-top: 30px;
    //     }

    //     @media (max-width: 480px) {
    //         display: block;
    //         align-items: center;
    //         width: 100%;
    //     }
    // `

    const ExpenseDescriptionText = styled.div`
        
    `

    const Description = styled.div`

    `

    const ExpenseText = styled.div`
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    `

    // const ParagraphAmount = styled.div`
    //     font-size: 48px;
    // `

    const ExpenseAmount = styled.div`
        width: 50%;
        text-align: right;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    `

    const AddedColor = styled.span`
        color: #51D289;
    `

    const User = styled(MdOutlineSupervisedUserCircle)`
        height: 50px;
        width: 50px;
        color: white;
    `

    const username = useSelector((state) => state.user.username);
    const amount = useSelector((state) => state.amount.amount);
    const expense = useSelector((state) => state.expense.expense);
    const category = useSelector((state) => state.category.category);
    
    const handleClose = () => {
        setShowModal(false);
        setShow(!show);
        ref.current.remove();
        setDescription(description => [...description, ""]);
    }

    return (
        <Main>
        <Navbar>

            <NavLeft>
                <Image src='/images/Vector.png' 
                onClick={handleGoBack}
                />    
                    <span>
                        <H3>Expenses</H3>
                        <H1>Monthly <AddedColor>Budget</AddedColor></H1>
                    </span>
            </NavLeft>            
    
            <NavRight>
                <p to="/dashboard">
                    <span><User /></span>
                    Welcome {username} 🖐
                </p>
                <ExpensesButton onClick={() => setShowModal(true)}>
                    New Expenses
                </ExpensesButton>
            </NavRight>
        </Navbar>
        <HR />

        <Section>
            <Description>
            <DescriptionBox>
                <Paragraph>Description</Paragraph>
                <Select name="Filter_expenses">
                    <Options value="0">Filter Expenses |</Options>
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
            </DescriptionBox> 
            <HR2 />           

            <ExpenseDescription >
            <ExpenseText >
            {show && <p ref={ref}>
                    <Image src='/images/ocio.svg'/>
                     </p>}
            <ExpenseDescriptionText>
            {show &&  <p ref={ref}>
                <Heading2>{category}</Heading2>
                </p>}
                    {show && <p ref={ref}>
                        <ParagraphDescription >
                            Name Expense: {expense} </ParagraphDescription>
                            </p> }
                    {show && <p ref={ref}>
                        <ParagraphDescription> 
                              Date: {day}-{month}-{year}
                        </ParagraphDescription>
                        </p> }
            </ExpenseDescriptionText>
            </ExpenseText>
            
                <ExpenseAmount>
                    {show && <p ref={ref}>
                        <Paragraph>&pound; {amount} </Paragraph>
                        </p> }
                </ExpenseAmount>
            </ExpenseDescription>
            { show && <p ref={ref}>
                <HR2 />
                </p>
            }

            {  description.length ? description.map(description => 
                    <ExpenseDescriptionText 
                    key={description} description={description}
                    /> ) : "Nothing to show..."
            }

            {!show &&
                <DescriptionText ref={ref}>
                    <H2>Looks like you Havent  Added any  
                    <AddedColor> expenses <br /> yet.</AddedColor></H2>
                    <Paragraph>
                        No worries, Just Hit The 
                        <AddedColor> Add</AddedColor> Button To Get Started
                    </Paragraph>
                    <Cart />
                </DescriptionText>
                }
            </Description>


            {/* <FlexParent> */}
                <Card />  
                <OptionalCard />
            {/* </FlexParent>   */}
        </Section>

        {showModal && <ExpensesModal handleClose={handleClose} />}

        </Main>
    )
}

export default Dashboard;
