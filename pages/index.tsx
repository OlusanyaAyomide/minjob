import Analytics from '@/components/dashboard/Analytics'
import UserStats from '@/components/dashboard/UserStats'
import Layout from '@/components/layout/Layout'
import CustomButton from '@/components/utils/CustomButton'
import React from 'react'

export default function Home() {
  return (
    <Layout>
       <UserStats/>
       <Analytics/>
    </Layout>
    // <div>
    //   <CustomButton className='block mx-auto mt-4'>Hello World</CustomButton>
    //   <span>Yest</span>
    // </div>
  )
}
