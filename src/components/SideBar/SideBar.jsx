import Modal from 'react-modal';
import { CircleX } from 'lucide-react';

function SideBar({ children, isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="bg-(--modalOverlayBackground) p-6 absolute top-0 left-0 w-[20vw] h-screen overflow-y-auto
      shadow-[0 4px 20px rgba(0, 0, 0, 0.2)] z-1000"
      overlayClassName="fixed top-0 left-0 w-full h-full
      bg-[rgba(0,0,0,0.1)] backdrop-blur-xs z-[1000]"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-2.5  right-2.5 bg-transparent border-none cursor-pointer text-(--white)"
      >
        <CircleX size={26} strokeWidth={1} />
      </button>
      {children}
    </Modal>
  );
}

export default SideBar;
