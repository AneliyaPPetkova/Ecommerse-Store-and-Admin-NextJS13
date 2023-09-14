"use client";

import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <p>Ecommerce Admin Dashboard</p>
      <div className="p-5">
        <Button size={"lg"} variant={"secondary"}>
          Login
        </Button>
        <UserButton afterSignOutUrl="/" />
        <Modal title="Test" isOpen description="Test Description">
          <div>Children</div>
        </Modal>
      </div>
    </>
  );
}
