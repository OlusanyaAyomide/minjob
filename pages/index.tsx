import Analytics from '@/components/dashboard/Analytics'
import Explore from '@/components/dashboard/Explore'
import Recentransaction from '@/components/dashboard/Recentransaction'
import UserStats from '@/components/dashboard/UserStats'
import Layout from '@/components/layout/Layout'
import React from 'react'

export default function Home() {
  return (
    <Layout>
       <UserStats/>
       <Analytics/>
       <Explore/>
       <Recentransaction/>
    </Layout>
  )
}
