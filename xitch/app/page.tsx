import { UserButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col gap-y-4">
      <h1>Dashboard</h1>
      <UserButton afterSignOutUrl="/sign-in" /> {/* Set afterSignOutUrl as a prop */}
    </div>
  );
}




