import React from 'react'
import { Grid, Image, Link } from './style'

export const ListOfFavs = ({ favs = [] }) => {
  if (favs.length === 0) return <p>user doesn't have any favs</p>

  return (
    <Grid>
      {
        favs.map(fav => (
          <Link key={fav.id} to={`/detail/${fav.id}`}>
            <Image src={fav.src} />
          </Link>
        ))
      }
    </Grid>
  )
}
