"use client";

import { useEffect, useState } from "react";
import { CreateStoreModal } from "../containers/modals/CreateStoreModal";

export const CreateStoreModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateStoreModal></CreateStoreModal>
    </>
  );
};
