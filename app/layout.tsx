export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="m-0 p-0 w-full overflow-x-hidden bg-slate-50 text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}