import styled from '@emotion/styled'
import { colors } from './styleConfig'

const Root = styled.header`
    display: flex;
    align-items: center;
    padding: 16px 40px;
    border-bottom: dashed 1px #A0A0A0;

`
const Title = styled.div`
    margin-right: auto;
    font-size: 28px;
`

const Search = styled.input`
    margin-right: 32px;
    background: url("/icons/search.svg") no-repeat 3px;
    border: none;
    outline: none;
    color: #d3d3d3;
    padding: 6px 12px 6px 36px;
    :focus {
        border: solid 2px yellow;
        border-radius: 20px;
    }
`
const RootAttention = styled.div`
    margin-right: 32px;
    position: relative;
    padding: 16px;
    border-radius: 100px;
    :hover {
    background:  ${colors.button};
  }

  :active {
    background: #ff9900;
  }

`
const AttentionAmount = styled.div`
    position: absolute;
    top: 12px;
    right: 6px;
    text-align: center;
    width: 12px;
    height: 12px;
    font-size: 10px;
    background-color: #fc9e38;
    border-radius: 16px;
    transition: all 0.2s;
    user-select: none;
`
const RootProfile = styled.div`
    display: flex;
    align-items: center;
`
const Name = styled.div`
    margin-right: 12px;
`
const Avatar = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 100%;
    border: yellow solid 3px;
`

const Attention = (props: {icon: string, amount: number}) => {
    return <RootAttention>
        <img src={`/icons/${props.icon}`} width={32} />
        <AttentionAmount>
            {props.amount}
        </AttentionAmount>
    </RootAttention>
}

const Profile = () => {
    return <RootProfile>
        <Name>
            Jessy Pinkman
        </Name>
        <Avatar src="/images/jessy.jpeg"/>
    </RootProfile>
}

export const Header = () => {
    return <Root>
        <Title>
            Overview
        </Title>
        <Search placeholder='Search here'/>
        <Attention icon="message.svg" amount={4} />
        <Attention icon="notification.svg" amount={2} />
        <Profile />
    </Root>
}