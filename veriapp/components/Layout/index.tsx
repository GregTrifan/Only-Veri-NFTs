import Head from "next/head";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { Button, MenuDropdown, WalletOptionsModal } from "..";
import { useAccount } from "wagmi";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import AboutMenu from "./AboutMenu";
import MobileMenu from "./MobileMenu";
interface Props {
  children: ReactNode;
  showWalletOptions: boolean;
  setShowWalletOptions: (showWalletOptions: boolean) => void;
}

export default function Layout(props: Props) {
  const { children, showWalletOptions, setShowWalletOptions } = props;

  const [{ data: accountData, loading }, disconnect] = useAccount({
    fetchEns: true,
  });
  const [showMobileMenu,setShowMobileMenu] = useState(false);

  const renderLabel = () => {
    if (accountData?.ens) {
      return (
        <>
          <div className="relative w-8 h-8 mr-2">
            {accountData.ens.avatar ? (
              <Image
                src={accountData?.ens.avatar}
                alt="ENS Avatar"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            ) : (
              <Image
                src="/images/black-gradient.png"
                alt="ENS Avatar"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            )}
          </div>
          <span className="truncate max-w-[100px]">
            {accountData.ens?.name}
          </span>
        </>
      );
    }

    return (
      <span className="truncate max-w-[150px]">{accountData?.address}</span>
    );
  };

  const renderButton = () => {
    if (accountData) {
      return (
        <MenuDropdown
          label={renderLabel()}
          options={[{ label: "Disconnect", onClick: disconnect }]}
        />
      );
    }

    return (
      <Button
        loading={loading || showWalletOptions}
        onClick={() => setShowWalletOptions(true)}
      >
        Connect
      </Button>
    );
  };

  return (
    <div>
      <Head>
        <title>Veri NFTs</title>
        <meta name="description" content="Veri NFTs Collection" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WalletOptionsModal
        open={showWalletOptions}
        setOpen={setShowWalletOptions}
      />

      <div className="absolute w-screen rounded-b-lg shadow-lg shadow-cyan-500/50 bg-gradient-to-tr from-emerald-500 to-blue-600">
        <div className="flex items-center justify-between py-2 px-4">
          <div className="flex items-center">
            <h4 className="text-2xl font-bold italic text-white cursor-default">
              Veri NFTs
            </h4>
            <div className="mx-4">
              <div className="hidden md:block">
                <Link href="/upload">
                  <a className=" transition hover:bg-black/10 text-blue-100 hover:text-white  px-3 py-2 rounded-md text-sm font-medium">
                    Upload
                  </a>
                </Link>
                <Link href="/blog">
                  <a className=" transition hover:bg-black/10 text-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Blog
                  </a>
                </Link>
                <AboutMenu />
              </div>
            </div>
          </div>
          <div className="inline-flex">
            {renderButton()}
            <button className="justify-center md:hidden" onClick={()=>setShowMobileMenu(true)}>
              <BiMenu className="w-5 h-5 ml-2 -mr-1 text-blue-100 hover:text-white" />
            </button>
            <MobileMenu open={showMobileMenu} setOpen={setShowMobileMenu}/>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
