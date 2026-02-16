'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
 
export default function Home() {
  const router=useRouter();
  return (
    <> 
    <ul>
     <Link href={"/"}><li>Home</li></Link>
     <Link href={"/profile/johndoe"}><li>Profile: johndoe</li></Link>
     <Link href={"/profile/janesmith"}><li>Profile: janesmith</li></Link>i
    </ul>
    </>
  );
}
