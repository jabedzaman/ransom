"use client";

import { useUser } from "@/hooks";

export default function Page() {
  return (
    <div>
      <User />
    </div>
  );
}

const User = () => {
  const { user } = useUser();
  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};
