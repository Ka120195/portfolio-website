
import "./globals.css";

export const metadata = { title: "Kamlesh Portfolio" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
