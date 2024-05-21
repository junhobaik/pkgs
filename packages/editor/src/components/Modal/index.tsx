import React, { useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  opened: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  portal?: boolean;
  backdrop?: boolean;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { opened, onClose, children, portal = true, backdrop = true } = props;
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (opened) setIsOpened(true);
    if (!opened) setTimeout(() => setIsOpened(false), 210);
  }, [opened]);

  const status = useMemo(() => {
    if (opened && !isOpened) return 'ready';
    if (opened && isOpened) return 'opened';
    if (!opened && isOpened) return 'close';
    if (!opened && !isOpened) return 'closed';
  }, [isOpened, opened]);

  useEffect(() => {
    document.body.style.overflow = status === 'opened' && portal ? 'hidden' : 'auto';
  }, [status, portal]);

  if (status === 'closed') return null;

  const backdropClassNames = `
    fixed top-0 left-0 z-50 w-screen h-screen bg-black transition-all duration-200
    ${status === 'opened' ? 'opacity-40 backdrop-blur' : 'opacity-0 backdrop-blur-none'}
    ${backdrop ? '' : 'bg-transparent'}
  `;

  const contentClassNames = `
    fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2
    max-w-[calc(100vw-32px)] max-h-[calc(100vh-32px)] overflow-hidden transition-opacity duration-200
    ${status === 'opened' ? 'opacity-100' : 'opacity-0'}
  `;

  const modalContent = (
    <>
      <div
        className={backdropClassNames}
        onClick={() => {
          if (onClose) onClose();
        }}
      />
      <div className={contentClassNames}>{children}</div>
    </>
  );

  if (portal) {
    return ReactDOM.createPortal(modalContent, document.querySelector('#pkg-editor.modal-root')!);
  }

  return modalContent;
};

export default Modal;
