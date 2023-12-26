"use client";

import Image from "next/image";

import { Button } from "ui";

export default function Home() {
  return (
    <main>
      <div>
        <Button>test1</Button>
        <Button styles={{ root: { backgroundColor: "red" } }}>test2</Button>
      </div>
    </main>
  );
}
