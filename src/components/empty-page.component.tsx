import { Container, Text } from "@mantine/core";

import empty_logo from '../app/assets/empty_logo.svg';

import { EmptyPageProps } from "types/empty-page-props.type";

export default function EmptyPage({my, children} : EmptyPageProps) {
  return (
    <Container
      my={my}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '32px',
        padding: 0
      }}
    >
      <img src={empty_logo} alt="empty_logo" width="141" />
      <Text fw={700} fz="24px" lh={'29px'}>
        Упс, здесь ничего нет!
      </Text>
      {children}
    </Container>
  )
}