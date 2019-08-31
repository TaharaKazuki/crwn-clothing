import React from 'react'

import CollectionItem from '../collection-item/collection-item.component'

import './collection-preview.style.scss'

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <div className="title">{ title.toUpperCase()}</div>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({id, ...otherItems}) => (
        <CollectionItem key={id} {...otherItems} />
      ))}
    </div>
  </div>
)

export default CollectionPreview