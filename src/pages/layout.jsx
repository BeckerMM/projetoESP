import Navbar from '../components/navbar/index';
 
export default function Layout({ children }) {
  return (
    <>
    <div  className='h-screen w-screen'>
      <Navbar />
      <main>{children}</main>
      </div>
    </>
  )
}
