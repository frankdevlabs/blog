import React from 'react'

const ReadMore = (props) => {
  return (
    <section>
      <div className='container' css={{
        maxWidth: '688px'
      }}>
        <h3 className='heading-3'>Meer lezen?</h3>
        {props.children}
      </div>
    </section>
  )
}

export default ReadMore
