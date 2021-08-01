import React from 'react'
import PropTypes from 'prop-types'
import { PhotoCard } from '../PhotoCard'
import { List } from './styles'

export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <List>
      {
        photos.map(photo => <PhotoCard key={photo.id} {...photo} />)
      }
    </List>
  )
}

ListOfPhotoCardsComponent.propTypes = {
  data: PropTypes.shape({
    photos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
      src: PropTypes.string.isRequired,
      likes: (props, propName) => {
        const propValue = props[propName]

        if (propValue === undefined) {
          return new Error(`${propName} value must be defined`)
        }

        if (propValue < 0) {
          return new Error(`${propName} value must be greater than 0`)
        }
      }
    }))
  })
}
