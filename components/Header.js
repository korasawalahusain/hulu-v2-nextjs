import Image from "next/image";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center h-auto">
      <div className="flex flex-grow max-w-2xl justify-evenly mt-8">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        className="object-contain"
      />
    </header>
  );
}

export default Header;
