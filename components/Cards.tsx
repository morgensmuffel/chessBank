import styled from '@emotion/styled';
import {format} from 'date-fns';
import { useState } from 'react';
import { hideCardNumber } from './utils';

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
    margin-left: 20px;
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
                <span>{format(props.data.expire, 'MM/yy')}</span>
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
    expire: Date
}

const firstCardData: CardProps = {
    paymentSystem: "Visa",
    type: "ChessBank Classic",
    nfc: true,
    balance: 6450,
    currency: "$",
    cardNumber: "1214161822446688",
    expire: new Date(2024, 10)
}

const secondCardData: CardProps = {
    ...firstCardData,
    paymentSystem: "MasterCard",
    nfc: false
}

export const CardsList = () => {
    return <Root>
        <Card data={firstCardData} />
        <Card data={secondCardData} />
        <Card data={firstCardData} />
    </Root>
}