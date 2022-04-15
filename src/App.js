import React from 'react'; 
import { useModalProvider, useModalContext } from './useModalContextHook';
/* Outcomes ========>
  * on click component button 
    * opens modal 
    * correct content shown in modal
  * on click modal button 
    * close modal 
*/

function App() {  
  const modalContentOne = <p>Modal Content One</p>;
  const modalContentTwo = <p>Modal Content Two</p>;

  const {ModalContext, providerValues} = useModalProvider();

  return (
    <div className="App">
      <ModalContext.Provider value={providerValues}>
        <Component modalContent={modalContentOne}>Component 1 Content</Component>
        <Component modalContent={modalContentTwo}>Component 2 Content</Component>
        <Modal/>
      </ModalContext.Provider>
    </div>
  );
}

const Component = ({
  modalContent,
  children
}) => {
  const style = { border: '2px solid red', padding: '5em', display: 'flex', 'flex-direction': 'column'};
  
  const { isOpen, setIsOpen, setContent } = useModalContext();

  const onClickButton = () => {
    setIsOpen(true)
    setContent(modalContent)
  }

  return (
    <div style={style}>
      {children}

      <p>isOpen: {isOpen.toString()}</p> 
      <button onClick={onClickButton}>Open Modal</button> 
    </div> 
  )
}

const Modal = () => {
  const style = { border: '2px solid green', padding: '5em', display: 'flex', 'flex-direction': 'column'};
  
  // ====== useContextHook
  const { isOpen, setIsOpen, content } = useModalContext();

  const onClickButton = () => {
    setIsOpen(false)
  }

  return isOpen && (
    <div style={style}>
      {content}
      <button onClick={onClickButton}>Close Modal</button> 
    </div> 
  )
}

export default App;
