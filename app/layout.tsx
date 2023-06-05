import "./globals.css";

export const metadata = {
  title: "A&G Logistics",
  description: "A Nigerian Based Haulage Company",
  icons: {
    icon: "/assets/logo-new.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-[var(--font-family)]">{children}</body>
    </html>
  );
}
