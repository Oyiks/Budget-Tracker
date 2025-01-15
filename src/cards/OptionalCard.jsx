import styled from "styled-components";
import { RiNetflixFill } from "react-icons/ri";
import { FaSpotify } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useSelector } from 'react-redux';
import ExpensesModal from "../ExpenseModal";
import { useState } from "react";

function Cards() {

  const Card = styled.div`
    border: none;
    width: 300px;
    height: 696px;
    border-radius: 4px;
    background: #FBFBFB;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    padding: 5px 20px;

    @media (max-width: 480px) {
            width: 270px;
        }
  `

  const CardHeader = styled.div`
    text-align: center;
  `

  const CardBody = styled.div`
    padding: 10px;
  `

  const CardFooter = styled.div`
    padding: 0px;
    text-align: center
  `

  const CardLine = styled.hr`
    border-style: dotted;
    color: gray;
  `

  const H2 = styled.h2`
    font-weight: normal;
  `

  const InnerCard = styled.div`
    width: 280;
    height: 400px;
    border-radius: 4px;
    background: var(--extras-box-color-light, #FFFDE7);
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.05);
    text-align: center;
    padding: 15px;

    @media (max-width: 480px) {
            padding: 5px;
        }
  `

  const CardTitle = styled.h4`
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.17px;
  `
  
  const Paragraph = styled.p`
    margin: 0px;
    padding: 0px;
    font-size: 13px;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1.17px;
  `

  const Button = styled.button`
    padding: 2px 12px 3px 15px;
    justify-content: center;
    align-items: center;
    background: var(--complementaries-compl-opt2, #51D289);
    font-weight: bold;
    border-radius: 22px;
    border: none;
    cursor: pointer;
  `

  const Netflix = styled(RiNetflixFill)`
        width: 30px;
        height: 30px;
        color: red;
    `
  const Spotify = styled(FaSpotify)`
        width: 30px;
        height: 30px;
        color: var(--complementaries-compl-opt2, #51D289);
  `

  const Amazon = styled(FaAmazon)`
        width: 30px;
        height: 30px;
        color: var(--complementaries-compl-opt2, #333);
  `

  const Google = styled(FcGoogle)`
        width: 30px;
        height: 30px;
  `

  const Facebook = styled(FaFacebook)`
        width: 30px;
        height: 30px;
        color: blue;
  `

  const CircularIcon = styled.div`
    border-radius: 50%;
    border: 2px solid green;
    padding: 2px;
    width: 30px;
    height: 30px;
    /* font-size: 30px; */
  `

  const ComponentCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px;
    height: 51px;
  `

  const Blockquote = styled.blockquote`
    background: #f9f9f9;
    border-left: 10px solid green;
    margin: 1.5em 10px;
    padding: 0 10px;

    :before {
      color: #f9f9f9;
      content: open-quote;
      font-size: 2em;
      line-height: 0.1em;
      margin-right: 0.25em;
      vertical-align: -0.4em;
    }
  `

  const goals = useSelector((state) => state.goals.goals);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
        setShowModal(false);
    }
  
  return (
    <Card>
      <CardHeader>
        <H2>Optionals</H2>
        <CardLine />
      </CardHeader>
      <CardBody>
        <InnerCard>
          <CardTitle>CHOOSE ANY FIX EXPENSES</CardTitle>
            
          <ComponentCard>
            <CircularIcon>
              <Netflix />
            </CircularIcon>
            <Paragraph>NETFLIX</Paragraph>
            <Button onClick={() => setShowModal(true)}>Select</Button>
          </ComponentCard>

          <ComponentCard>
            <CircularIcon>
              <Spotify />
            </CircularIcon>
            <Paragraph>SPOTIFY</Paragraph>
            <Button onClick={() => setShowModal(true)}>Select</Button>
          </ComponentCard>
          
          <ComponentCard>
            <CircularIcon>
              <Amazon />
            </CircularIcon>
            <Paragraph>AMAZON</Paragraph>
            <Button onClick={() => setShowModal(true)}>Select</Button>
          </ComponentCard>

          <ComponentCard>
            <CircularIcon>
              <Google />
            </CircularIcon>
            <Paragraph>GOOGLE</Paragraph>
            <Button onClick={() => setShowModal(true)}>Select</Button>
          </ComponentCard>

          <ComponentCard>
            <CircularIcon>
              <Facebook />
            </CircularIcon>
            <Paragraph>FACEBOOK</Paragraph>
            <Button onClick={() => setShowModal(true)}>Select</Button>
          </ComponentCard>
        </InnerCard>

        </CardBody>

      <CardLine />

      <CardFooter>
        <H2>Goals</H2>

        <Blockquote to="/dashboard">
          {goals}
        </Blockquote>
      </CardFooter>

      {showModal && <ExpensesModal handleClose={handleClose} />}
    </Card>
  )
}

export default Cards;
