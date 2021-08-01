import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

const Favs = () => (
  <Layout title='Your favorites' subtitle='Here you can find your favorite photos'>
    <h1>Favs</h1>
    <FavsWithQuery />
  </Layout>
)

export default Favs
