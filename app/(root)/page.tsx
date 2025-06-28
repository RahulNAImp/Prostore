import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME || "prostore"}`,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION || "Moderm ecommece store built with next js",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000')
};

const homePage = () => {
  return ( <>Prostore</> );
}
 
export default homePage;