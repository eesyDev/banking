import HeaderBox from '@/components/HeaderBox'
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: "Rano" }
  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "User"}
            subtext="Access & manage your account and transactions efficiently."
          />
        </header>
      </div>
    </section>
  )
}

export default Home