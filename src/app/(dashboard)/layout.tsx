export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <nav>dashboard</nav>
      {children}
    </main>
  );
}
