import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderLeft: '1px solid $gray700',
  height: 'max-content',
})

export const UserInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '&::after': {
    content: "''",
    display: 'block',
    width: 32,
    height: 4,
    background: '$gradient-horizontal',
    borderRadius: '$full',
    marginTop: 40,
  },
})

export const ProfileDetailsWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 40,
  marginTop: 50,
})

export const Button = styled('button', {
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
  marginTop: '50px',
  padding: '10px 20px',
  backgroundColor: '#181c2a',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',

  '&:hover': {
    backgroundColor: '#1f2538',
  },
})
