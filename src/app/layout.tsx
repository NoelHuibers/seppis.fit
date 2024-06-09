import "~/styles/globals.css";

import { Libre_Franklin } from "next/font/google";

export const metadata = {
  title: "Seppis Fit@Home",
  description: "Seppis Fit@Home - Dein Personaltrainer und Dienstleister",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const libre_franklin = Libre_Franklin({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre_franklin",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={libre_franklin.variable}>
      <body>{children}</body>
    </html>
  );
}
