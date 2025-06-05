/* import Hero from "@/components/Hero"
import { Layout } from "../components/Layout"
import Navbar from "../components/Navbar" */

import Hero from "@/components/Hero"
import HomeComponent from "@/components/HomeComponent"
import { Layout } from "@/components/Layout"

function Home() {
  return (
    <Layout>
      <Hero />
      <HomeComponent />
    </Layout>
  )
}

export default Home
