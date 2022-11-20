import styled from '@emotion/styled';
import {format, parseISO} from 'date-fns';
import { useEffect, useState } from 'react';
import { hideCardNumber } from './utils';
import axios from 'axios';

const Root = styled.div`
    display: flex;
    width: 100%;
    overflow: auto;
`

const CardRoot = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(225deg, yellow, blue);
    height: 240px;
    width: 370px;
    padding: 24px;
    border-radius: 16px;
    margin-left: 40px;
    margin-top: 40px;
    flex-shrink: 0;
`

const Header = styled.div`
    display: flex;

`

const PaymentSystem = styled.div`
    font-weight: 600;
    padding-right: 24px;
    border-right: dashed 1px #bcbaba;
    margin-right: 24px;
`

const Nfc = styled.div`
    transform: rotate(90deg);
    margin-left: auto;
`

const Bottom = styled.div`
    margin-top: auto;
`

const FirstRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`

const SecondRow = styled.div`
    display: flex;
    justify-content: space-between;
`

const Card = (props: {data: CardProps}) => {
    const [isShowCardNumber, setShowCardNumber] = useState(false);
    const [isShowBalance, setShowBalance] = useState(false);
    return <CardRoot>
        <Header>
            <PaymentSystem>{props.data.paymentSystem}</PaymentSystem>
            <div>{props.data.type}</div>
            { props.data.nfc ? <Nfc>
                <img src={`/icons/nfc.svg`} width={24} />
            </Nfc> : null}
        </Header>
        <Bottom>
            <FirstRow>
                <span>Balance</span>
                <span onClick={() => {
                    setShowCardNumber(!isShowCardNumber)
                }}>{
                    isShowCardNumber 
                        ? props.data.cardNumber
                        : hideCardNumber(props.data.cardNumber)
                }</span>
            </FirstRow>
            <SecondRow>
                <span onClick={() => {
                    setShowBalance(!isShowBalance)
                }}>{
                    isShowBalance
                        ? props.data.currency + props.data.balance
                        : "******"
                }</span>
                <span>{format(parseISO(props.data.expire),  'MM/yy')}</span>
            </SecondRow>
        </Bottom>
    </CardRoot>
}

type CardProps = {
    paymentSystem: string;
    type: string;
    nfc: boolean;
    graphic?: string;
    balance: number;
    currency: string;
    cardNumber: string;
    expire: string
}

const firstCardData: CardProps = {
    paymentSystem: "Visa",
    type: "ChessBank Classic",
    nfc: true,
    balance: 6450,
    currency: "$",
    cardNumber: "1214161822446688",
    expire: "toDo Delete This"
}

const secondCardData: CardProps = {
    ...firstCardData,
    paymentSystem: "MasterCard",
    nfc: false
}

export const CardsList = () => {
    const [cardsData, setCardsData] = useState([])

    

    useEffect(() => {
        console.log('fire')
        axios.get('https://my-json-server.typicode.com/morgensmuffel/chessBankAPI/users/1').then(response => {
            setCardsData(response.data.cards)
        })
    }, [])

    return <Root>
        {
            cardsData.map(cardData => <Card data={cardData} />)
        }
    </Root>
}