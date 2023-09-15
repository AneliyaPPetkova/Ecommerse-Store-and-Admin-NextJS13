"use client";

import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div className="p-5">
      <Button size={"lg"} variant={"secondary"}>
        Login
      </Button>
      <UserButton afterSignOutUrl="/" />
      <Modal title="Test" isOpen description="Test Description">
        Children
      </Modal>
    </div>
  );
};

export default Home;
