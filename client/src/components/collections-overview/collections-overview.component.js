import React from 'react'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from '../collections-overview/collections-overview.component'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'
import './collections-overview.scss'

const CollectionOverview = ({collections}) => {
  return (
    <div className='collections-overview'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)
