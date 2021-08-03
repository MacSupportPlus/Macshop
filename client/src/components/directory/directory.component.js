import React, { Component } from 'react'
import MenuItem from '../menu-item/menu-item.component'
import {createStructuredSelector} from 'reselect'
import {selectDirectorySections} from '../../redux/directory/directory.selectors'
import {connect} from 'react-redux'
import './directory.styles.scss'

const Directory = ({sections}) => {
   
        return (
            <>
                <div className="directory-menu">
                {
                      sections.map(({title, id, imageUrl, size, linkUrl })=> (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} link={linkUrl} />
                    ))
                }
                </div>
            </>
        )
    }
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)

