import styled from '@emotion/styled'

const Root = styled.header`
    display: flex;
    align-items: center;
    padding: 32px;

`
const Title = styled.div`
    margin-right: auto;
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
`
const AttentionAmount = styled.div`
  position: absolute;
  top: -4px;
  right: -10px;
  text-align: center;
  width: 12px;
  height: 12px;
  font-size: 10px;
  background-color: #fc9e38;
  border-radius: 16px;
  transition: all 0.2s;
  user-select: none;
  :hover {
    background: #3d90da;
  }

  :active {
    background: #ff9900;
  }
`
const RootProfile = styled.div`
    margin-right: 24px;
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
    border: yellow solid 2px;
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