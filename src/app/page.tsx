"use client";

import Image from "next/image";
import styles from "./page.module.css";
import clsx from "clsx";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setTimeout(() => router.push("/portfolio"), 1000);
  };

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <span
          className={clsx(
            styles.text,
            "text-4xl font-semibold tracking-tighter pr-1"
          )}
        >
          Eric Valcik
        </span>
        <div
          className={clsx(
            styles.thirteen,
            "left-[calc(50%+70px)]",
            isClicked && "h-[120vh] w-[120vw] !-left-[70px]"
          )}
          onClick={handleClick}
        >
          <span className="text-3xl">
            <Image
              src="/magnifying-glass-solid.svg"
              alt="Magnifying glass icon"
              width={24}
              height={24}
              priority
            />
          </span>
        </div>
      </div>
    </main>
  );
}
