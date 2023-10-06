"use client";

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { CreateStoreModal } from "../containers/modals/CreateStoreModal";
import { useModalStore } from "@/hooks/useModalStore";

const Home = () => {
  const createStoreModal = useModalStore();

  return (
    <div className="p-5">
      <Button
        size={"lg"}
        variant={"secondary"}
        onClick={(e) => {
          createStoreModal.toggleModal();
        }}
      >
        Login
      </Button>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Home;
