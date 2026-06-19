import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donate Now — Support Our Cause',
  description: 'Support Narayana Seva Dal. End hunger by donating via direct bank transfer or UPI QR code. Every contribution counts.',
};

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
