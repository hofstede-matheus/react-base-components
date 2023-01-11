import { useState } from 'react'
import './App.css'
import * as Dialog from '@radix-ui/react-dialog';
import { SimpleModal } from './components/SimpleModal';
import { SimpleButton } from './components/SimpleButton';
import { SimpleInput } from './components/SimpleInput';

function App() {
  return (
    <div className="App">
      <h1>Base Components</h1>
      <div className="card">
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button> Open Modal </button>
          </Dialog.Trigger>
          <SimpleModal />
        </Dialog.Root>
        <SimpleButton/>
        <SimpleInput/>
      </div>
    </div>
  )
}

export default App
