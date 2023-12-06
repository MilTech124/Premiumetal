import React from 'react'

function page() {
  return (
    <div className='flex flex-col w-screen h-screen justify-center items-center'>
        <p className='md:text-5xl'>Zaloguj się do panelu administracyjnego</p>
        <a href="https://backend.premiumetal.pl/backed/wp-admin/post.php?post=8&action=edit" target="_blank" rel="noopener noreferrer"><button className='btn btn-primary'>Zaloguj</button></a>
    </div>
  )
}

export default page