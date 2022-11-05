import styled from '@emotion/styled'

const Root = styled.header`
    display: flex;
    align-items: flex-start;
    padding: 32px;
    
`
const Title = styled.div`
    margin-right: auto;
`

const Search = styled.input`
    margin-right: 32px;
`
const RootAttention = styled.div`
    margin-right: 32px;
`
const AttentionAmount = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
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
        <Search />
        <Attention icon="message.svg" amount={4} />
        <Attention icon="notification.svg" amount={2} />
        <Profile />
    </Root>
}