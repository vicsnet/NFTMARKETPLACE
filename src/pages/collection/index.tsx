import React, { Suspense } from 'react'
import Collection from '../../features/collection/Collection'

const index = () => {
  return (
    <div>
      <Suspense>

        <Collection/>
        </Suspense>
      
    </div>
  )
}

export default index