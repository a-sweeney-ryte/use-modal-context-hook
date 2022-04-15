import { useContext, useState, createContext } from "react";

// declared here so that useContextHook has access
// could use imports and exports in app but would take more code
// could use local / session storage
let ModalContext;

// use two hooks 
// one for initializing values with minimal code
// one for reading and setting values anywhere within provider
export function useModalProvider() {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);

  ModalContext = createContext();
  const providerValues = {
    isOpen,
    setIsOpen,
    content,
    setContent,
  };

  return { 
    ModalContext,
    providerValues
  }
};

export function useModalContext() {
  const context = useContext(ModalContext); 
  const {isOpen, setIsOpen, content, setContent} = context; 
  
  return { isOpen, setIsOpen, content, setContent };
}