"use client";

import { useState } from "react";
import { useRouter, redirect } from "next/navigation";
import EmployeeLoginPage from "@/app/employee/page";

export default function Home() {
  const router = useRouter();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = () => {
    // setIsLoggingIn(true);

    // // Simulate login delay (optional)
    // setTimeout(() => {
    //   router.push("/dashboard");
    //   setIsLoggingIn(false);
    // }, 800);
  };

  redirect('/employee')
}
