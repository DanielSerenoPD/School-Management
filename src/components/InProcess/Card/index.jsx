import React from 'react';
import { MdWatchLater } from 'react-icons/md';
import {
  ContainerCard,
  HeaderCard,
  BodyCard,
  Text,
  FadedText,
  BlueText,
} from './Elements.jsx'
export default function Card() {
  return (
    <ContainerCard>
      <HeaderCard>
      <MdWatchLater />
        <BlueText>13:00 - 15:00</BlueText>
      </HeaderCard>
      <BodyCard>
        <Text>Termodinamica</Text>
        <FadedText>
          Aula: VVBL / Grupo: C
        </FadedText>
        <FadedText>
        Profesor: Mendez Romero Tania
        </FadedText>
      </BodyCard>
    </ContainerCard>
  )
}
