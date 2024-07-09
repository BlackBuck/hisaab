import '@/app/ui/global.css';
import {garamond} from "@/app/ui/fonts";

// export const experimental_ppr = true;

export default function RootLayout({
  children,
}: {
    children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${garamond.className} antialiased`}>{children}</body>
    </html>
  );
}
