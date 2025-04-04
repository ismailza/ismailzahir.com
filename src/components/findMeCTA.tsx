import Link from "next/link";
import {socials} from "@/config/app";

const FindMeCTA = () => {
  return (
    <div className="bg-white dark:bg-gray-950">
      <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
          Find me on
        </h2>
        <div className="flex justify-center space-x-4">
          <Link href={socials.github} target={"_blank"} title={"GitHub"}>
            <img src={"/logo/github.gif"} alt={"GitHub"} width={"32px"} height={"32px"}/>
          </Link>
          <Link href={socials.linkedin} target={"_blank"} title={"LinkedIN"}>
            <img src={"/logo/linkedin.gif"} alt={"LinkedIn"} width={"32px"} height={"32px"}/>
          </Link>
          <Link href={socials.instagram} target={"_blank"} title={"Instagram"}>
            <img src={"/logo/instagram.gif"} alt={"Instagram"} width={"32px"} height={"32px"}/>
          </Link>
          <Link href={socials.facebook} target={"_blank"} title={"Facebook"}>
            <img src={"/logo/facebook.gif"} alt={"Facebook"} width={"32px"} height={"32px"}/>
          </Link>
          <Link href={socials.twitter} target={"_blank"} title={"X"}>
            <img src={"/logo/x.png"} alt={"X"} width={"32px"} height={"32px"}/>
          </Link>
          <Link href={socials.youtube} target={"_blank"} title={"YouTube"}>
            <img src={"/logo/youtube.gif"} alt={"YouTube"} width={"32px"} height={"32px"}/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FindMeCTA;