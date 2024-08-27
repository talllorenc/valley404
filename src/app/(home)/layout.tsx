import Navbar from '@/components/Navbar/Navbar'

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}
