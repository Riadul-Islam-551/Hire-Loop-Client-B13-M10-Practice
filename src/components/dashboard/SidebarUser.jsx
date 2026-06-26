import { loggedInUser } from "@/lib/core/session";
import Image from "next/image";

const SidebarUser = async () => {
  const user = await loggedInUser();
  return (
    <div className="mb-5">
      <div className="w-14  flex items-start gap-1 ">
        <Image
          src={user?.image}
          alt={user?.name}
          width={100}
          height={100}
          className="w-full"
        ></Image>
        <div>
          <p className="capitalize flex font-bold text-xl text-orange-500 ">
            <span>{user?.role}</span>portal
          </p>
          <p>{user?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarUser;
