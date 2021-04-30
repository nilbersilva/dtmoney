import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import {NewTransactionModal} from './components/NewTransactionModal';

Modal.setAppElement('#root');

export function App() {
  const [isNewTrasanctionModalOpen, setIsNewTrasanctionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setIsNewTrasanctionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      setIsNewTrasanctionModalOpen(false);
  }
  
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTrasanctionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle/>
    </>
  );
}