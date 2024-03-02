import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'

export default function Layout(props: any) {
  const { children } = props

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
