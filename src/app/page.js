import Banner from "@/components/homepage/banner";
import ProfilesHome from "@/components/ProfilesHome";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <ProfilesHome />
    </div>
  );
}