import { Button } from '@/components/ui/button';
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <Image
          src='/images/logo.png'
          alt="logo"
          width={30}
          height={30}
        />
      </div>
    </>
  );
}
