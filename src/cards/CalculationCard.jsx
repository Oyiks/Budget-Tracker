import styled from "styled-components";
import ProgressBar from "../ProgressBar";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

function Cards() {

  const Card = styled.div`
    border: none;
    width: 270px;
    height: 696px;
    border-radius: 4px;
    background: #FBFBFB;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    padding: 5px 20px;
    
  `

  const CardHeader = styled.div`
    text-align: center;
  `

  const CardBody = styled.div`
    padding: 10px;
  `
  const AvailableExpenses = styled.div`
    border-radius: 4px;
    background: var(--main-dsrk-base, #1E1E1E);
    box-shadow: 2px 4px 4px 2px rgba(0, 0, 0, 0.10);
    color: white;
    text-align: center;
    width: 50%;
    padding: 10px 10px 10px 10px;
  `

  const Spent = styled.div`
    border-radius: 4px;
    background: var(--main-dsrk-base, #1E1E1E);
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.10);
    color: white;
    text-align: center;
    width: 50%;
    padding: 10px 10px 10px 10px;
  `

  const CardFooter = styled.div`
    padding: 10px;
    text-align: center
  `

  const Button = styled.button`
    background: var(--complementaries-compl-opt1, #FFE600);
    padding: 12px 69px;
    border-radius: 4px;
    cursor: pointer;
    border: none;

    &hover{
      background-color: #0056b3;
    }
  `
  const CardText = styled.div`
    padding: 8px 10px 10px 5px;
    text-align: center;
    background: var(--extras-box-color-light, #FFFDE7);
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  `

  const CardLine = styled.hr`
    border-style: dotted;
    color: gray;
  `

  const FlexChild = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: stretch;
  `

  const H2 = styled.h2`
    font-weight: normal;
  `

  const H4 = styled.h4`
    margin: 5px;
    padding: 0px;
    font-size: 11px;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1.17px;
  `
  const Paragraph = styled.p`
    margin: 0px;
    padding: 0px;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `

  const AddedColor = styled.span`
        color: #51D289;
    `
  
  const AddedNewColor = styled.span`
        color: var(--complementaries-compl-opt1, #FFE600);
    `
  
  const navigate = useNavigate();
  const income = useSelector((state) => state.income.income);
  const amount = useSelector((state) => state.amount.amount);

  const handleGoBack = () => {
        navigate('/', { replace: true });
    };
  
  return (
    <Card>
      <CardHeader>
        <H2>Calculation</H2>
        <CardLine />
      </CardHeader>
      <CardBody>
        <CardText>
          <H4>INCOME</H4>
          <Paragraph to="/dashboard">
            &pound;{income}.00
          </Paragraph>
        </CardText>

       <ProgressBar 
        progress={0}
        size={180}
        strokeWidth={13}
        circleOneStroke='#D2D2D2'
        circleTwoStroke='#D2D2D2'
       />
        <FlexChild>
          <AvailableExpenses>
            <H4>AVAILABLE</H4>
            <Paragraph>
            <AddedColor>&pound;{income}.00</AddedColor></Paragraph>
          </AvailableExpenses>

          <Spent>
            <H4>SPENT</H4>
            <Paragraph><AddedNewColor>&pound;{amount}.00</AddedNewColor></Paragraph>
          </Spent>
        </FlexChild>
      </CardBody>

      <CardLine />

      <CardFooter>
        <Button onClick={handleGoBack} >Reset Expenses</Button>
      </CardFooter>
    </Card>
  )
}

export default Cards;
