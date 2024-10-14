export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <nav>Hello</nav>
      {children}
    </main>
  );
}
