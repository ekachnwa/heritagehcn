import type { Metadata } from "next";
import "./globals.css";
import Layout from "./components/layout/Layout";

export const metadata: Metadata = {
  title: "Heritage Homecare Network Limited",
  description: "Compassionate, person-centered home care services dedicated to helping individuals live independently with dignity.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}