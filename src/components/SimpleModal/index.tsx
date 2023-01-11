import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, OverLay } from './styles';
import { X } from 'phosphor-react';
import { SimpleButton } from '../SimpleButton';
import { SimpleInput } from '../SimpleInput';


export function SimpleModal() {
  return (
    <Dialog.Portal>
      <OverLay>
        <Content>
          <Dialog.Title>Opa</Dialog.Title>
          <CloseButton>
            <X/>
          </CloseButton>
          <form action="">
            <SimpleInput/>
            <SimpleInput/>
            <SimpleInput/>

            <SimpleButton/>
          </form>
        </Content>
      </OverLay>
    </Dialog.Portal>
  );
}
