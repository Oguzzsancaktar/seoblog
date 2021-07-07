import Layout from '../components/Layout'
import Link from 'next/link'
const Index = () => {
  return (
    <Layout>

      <h2>Home</h2>
      <Link href="/signin"> 
      <a>Signin</a>
      </Link>
    </Layout>
  )
}

export default Index
