import React from 'react'
import { Helmet } from 'react-helmet'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'

export const Home = ({ categoryId }) => (
  <>
    <Helmet>
      <title>Petgram - Your pet photo app</title>
      <meta name='description' content='Petgram lets you find pretty pet photos' />
    </Helmet>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={categoryId} />
  </>
)
