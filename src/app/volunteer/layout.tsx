import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Volunteer with Us — Join the Seva Dal',
  description: 'Join our team of 250+ volunteers near Guntur railway station and government hospital. Register now to serve humanity, one meal at a time.',
};

export default function VolunteerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
