'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

type ModalType = React.FC<ModalProps>;

export const Modal: ModalType = ({ title, description, isOpen, onClose, children }) => {
  const onChange = (open: boolean) => {
    if (!open) {
      if (onClose) onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
          {children}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
