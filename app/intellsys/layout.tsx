import { AuthProvider } from '@/components/admin/AuthProvider';

export default function IntellsysLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}
