import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'
import { Layout } from '../components/Layout'

const Detail = ({ detailId }) => (
  <Layout title={`Photo ${detailId}`}>
    <PhotoCardWithQuery id={detailId} />
  </Layout>
)

export default Detail
