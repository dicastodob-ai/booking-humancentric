import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="m-0 p-0 w-full overflow-x-hidden bg-slate-50">
        {children}
      </body>
    </html>
  );
}