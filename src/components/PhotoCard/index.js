import React from 'react'
import { ImgWrapper, Img, Article } from './styles'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
import { useNearScreen } from '../../hooks/useNearScreen'
import { Link } from '@reach/router'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()

  return (
    <Article ref={element}>
      {
        show &&
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>
            <ToggleLikeMutation>
              {
                (toggleLike) => {
                  const handleFavClick = () => {
                    toggleLike({
                      variables: {
                        input: { id }
                      }
                    })
                  }
                  return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
                }
              }
            </ToggleLikeMutation>
          </>
      }
    </Article>
  )
}
