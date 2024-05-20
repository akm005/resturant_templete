import React from 'react'
import PropTypes from 'prop-types'

function SectionHeader({title,description}) {
  return (
    <div className="section-header pb-4">
        <h2>{title}</h2>
        <p className="amatic fs-1">
        {description[0] }
        <span className="text-danger mx-2">{description[1]}</span>
        {description[2]??''}
        </p>
      </div>
  )
}

SectionHeader.propTypes = {
    title:PropTypes.string,
    description:PropTypes.array
}

export default SectionHeader
