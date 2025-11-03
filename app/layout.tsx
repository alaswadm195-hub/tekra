import "./globals.css";

import Footer from "../components/Footer";

export const metadata = {
  title: "TEKRA Agency",
  description: "Creative tech studio for web, design, systems, and digital growth.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#050811] text-white">

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
