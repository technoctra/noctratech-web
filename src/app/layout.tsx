import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";
import CustomCursor from "@/components/common/CustomCursor";
import Script from "next/script";
import MainLayout from "@/components/layout/MainLayout";

export const metadata: Metadata = {
  title: "Noctra Tech | Custom Web & App Solutions",
  description: "We help businesses build custom websites and web applications that improve operations and drive growth.",
   verification: {
    google: "Xei3GWpZ2eXq4375CJJv8y8c77evf8-UhAVdvexzlnE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CustomCursor />
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="9cccf7be-e6e8-413b-9eeb-9032ad65b198"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <MainLayout>{children}</MainLayout>

      </body>
    </html>
  );
}
