import React from 'react'
import PropTypes from 'prop-types'
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

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  )
}
