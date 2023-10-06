"use client"

import { useModalStore } from "@/hooks/useModalStore";
import { Modal } from "@/components/ui/modal";

export const CreateStoreModal = () => {
  const createStoreModal = useModalStore();

  return (
    <div className="p-5">
      <Modal
        isOpen={createStoreModal.isOpen}
        title="Create Store"
        description="Create Store modal"
        onClose={() => createStoreModal.toggleModal()}
      >
        Children
      </Modal>
    </div>
  );
};
