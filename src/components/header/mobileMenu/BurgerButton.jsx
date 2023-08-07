import { styled } from 'styled-components';

export default function BurgerButton({ openMenu, setOpenMenu }) {
  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <StyledBurger open={openMenu} onClick={handleClick}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}

const StyledBurger = styled.button`
  position: absolute;
  top: 2%;
  left: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 699;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background: #607b96;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
