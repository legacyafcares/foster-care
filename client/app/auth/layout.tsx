import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication Pages",
  description: "Sign Up, Log In and Verify your email address.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <section>
        {children}
      </section>
  );
}
