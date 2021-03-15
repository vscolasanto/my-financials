import styled from 'styled-components'
import Switch, { ReactSwitchProps } from 'react-switch'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const ToggleLabel = styled.span`
  color: ${(props) => props.theme.colors.white};
`

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    onColor: theme.colors.purpleDark,
    offColor: theme.colors.purpleDark,
    offHandleColor: theme.colors.goldLight,
    onHandleColor: theme.colors.purpleLight
  })
)<ReactSwitchProps>`
  margin: 0 1rem;

  .react-switch-bg {
    height: 24px;
    border: 2px solid ${(props) => props.theme.colors.purpleLight};
  }

  .react-switch-bg div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-switch-handle {
    border: 3px solid ${(props) => props.theme.colors.purpleDark} !important;
  }

  svg {
    color: ${(props) => props.theme.colors.goldLight};
    position: absolute;
    top: 2px;
  }
`
