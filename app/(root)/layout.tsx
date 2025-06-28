// import { Star } from "lucide-react";
import Footer from "@/components/footer";
import Header from "@/components/header/h-index";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <Header></Header>
        <main className="flex-1 wrapper">
            {children}
        </main>
        <Footer></Footer>
    </div>

  );
}