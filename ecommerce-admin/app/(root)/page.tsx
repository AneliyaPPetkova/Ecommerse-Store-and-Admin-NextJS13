import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <p>Ecommerce Admin Dashboard</p>
      <div className="p-5">
        <Button size={"lg"} variant={"secondary"}>
          Login
        </Button>
        <UserButton afterSignOutUrl="/"/>
      </div>
    </>
  );
}
