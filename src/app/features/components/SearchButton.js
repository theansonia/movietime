import { Link } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'

const SearchButton = ({ updateSearchStatus, updateTitle, updatePages }) => {
  const category = useSelector((state) => state.category)

  return (
    <>
      {category === null ? (
        <Link
          to={'/home'}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            id='somediv'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => {
              updateSearchStatus(true)
              updateTitle('')
              updatePages(1)
            }}
          >
            <svg
              id='searchbtn'
              width='104'
              height='104'
              viewBox='0 0 104 104'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g filter='url(#filter0_d)'>
                <path
                  id='searchpath'
                  d='M100 48C100 74.5097 78.5097 96 52 96C25.4903 96 4 74.5097 4 48C4 21.4903 25.4903 0 52 0C78.5097 0 100 21.4903 100 48Z'
                  fill='#343A40'
                />
                <path
                  id='searchpath'
                  d='M100 48C100 74.5097 78.5097 96 52 96C25.4903 96 4 74.5097 4 48C4 21.4903 25.4903 0 52 0C78.5097 0 100 21.4903 100 48Z'
                  fill='url(#paint0_linear)'
                />
              </g>
              <path
                d='M61.7632 42.7662C61.7632 49.4941 55.7091 55.0325 48.1316 55.0325C40.5541 55.0325 34.5 49.4941 34.5 42.7662C34.5 36.0384 40.5541 30.5 48.1316 30.5C55.7091 30.5 61.7632 36.0384 61.7632 42.7662Z'
                stroke='#F8F9FA'
              />
              <line
                y1='-0.5'
                x2='19.0436'
                y2='-0.5'
                transform='matrix(0.671291 0.741194 -0.804176 0.594391 57.2162 51.885)'
                stroke='#F8F9FA'
              />
              <defs>
                <filter
                  id='filter0_d'
                  x='0'
                  y='0'
                  width='104'
                  height='104'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                  />
                  <feOffset dy='4' />
                  <feGaussianBlur stdDeviation='2' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                  />
                  <feBlend
                    mode='normal'
                    in2='BackgroundImageFix'
                    result='effect1_dropShadow'
                  />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <linearGradient
                  id='paint0_linear'
                  x1='52'
                  y1='0'
                  x2='52'
                  y2='96'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#6C757D' />
                  <stop offset='1' stopColor='white' stopOpacity='0' />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </Link>
      ) : (
        <div
          onClick={() => {
            updateSearchStatus(true)
            updateTitle('')
            updatePages(1)
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg
            id='searchbtn'
            width='104'
            height='104'
            viewBox='0 0 104 104'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g filter='url(#filter0_d)'>
              <path
                id='searchpath'
                d='M100 48C100 74.5097 78.5097 96 52 96C25.4903 96 4 74.5097 4 48C4 21.4903 25.4903 0 52 0C78.5097 0 100 21.4903 100 48Z'
                fill='#343A40'
              />
              <path
                // id="searchpath"
                d='M100 48C100 74.5097 78.5097 96 52 96C25.4903 96 4 74.5097 4 48C4 21.4903 25.4903 0 52 0C78.5097 0 100 21.4903 100 48Z'
                fill='url(#paint0_linear)'
              />
            </g>
            <path
              d='M61.7632 42.7662C61.7632 49.4941 55.7091 55.0325 48.1316 55.0325C40.5541 55.0325 34.5 49.4941 34.5 42.7662C34.5 36.0384 40.5541 30.5 48.1316 30.5C55.7091 30.5 61.7632 36.0384 61.7632 42.7662Z'
              stroke='#F8F9FA'
            />
            <line
              y1='-0.5'
              x2='19.0436'
              y2='-0.5'
              transform='matrix(0.671291 0.741194 -0.804176 0.594391 57.2162 51.885)'
              stroke='#F8F9FA'
            />
            <defs>
              <filter
                id='filter0_d'
                x='0'
                y='0'
                width='104'
                height='104'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feColorMatrix
                  in='SourceAlpha'
                  type='matrix'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                />
                <feOffset dy='4' />
                <feGaussianBlur stdDeviation='2' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                />
                <feBlend
                  mode='normal'
                  in2='BackgroundImageFix'
                  result='effect1_dropShadow'
                />
                <feBlend
                  mode='normal'
                  in='SourceGraphic'
                  in2='effect1_dropShadow'
                  result='shape'
                />
              </filter>
              <linearGradient
                id='paint0_linear'
                x1='52'
                y1='0'
                x2='52'
                y2='96'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#6C757D' />
                <stop offset='1' stopColor='white' stopOpacity='0' />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}
    </>
  )
}

export default SearchButton
