"use client"

import { useUser } from "@clerk/nextjs";

export default function WelcomeUser() {
  const user = useUser();

  return (
    <div>Welcome <strong>{user.user?.fullName ?? "Guest"}!</strong></div>
  )
}