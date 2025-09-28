"use client";

import { useState } from "react";

import { authClient } from "@/lib/auth-client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { data: session } = authClient.useSession();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignup = () => {
    authClient.signUp.email(
      {
        email,
        name,
        password,
      },
      {
        onError: () => {
          window.alert("Something went worng");
        },
        onSuccess: () => {
          window.alert("GO to the next page");
        },
      }
    );
  };
  const onLogin = () => {
    authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onError: () => {
          window.alert("Something went worng");
        },
        onSuccess: () => {
          window.alert("GO to the next page");
        },
      }
    );
  };

  if (session) {
    return (
      <div className="flex flex-col p-4 gap-y-4">
        <p>Login as {session.user.name}</p>
        <Button onClick={() => authClient.signOut()}>Sign-Out</Button>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-y-4 p-4 ">
        <Input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button onClick={onSignup}> Click here</Button>
      </div>

      <div className="flex flex-col gap-y-4 p-4 ">
        <Input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button onClick={onLogin}> Click here</Button>
      </div>
    </>
  );
}
