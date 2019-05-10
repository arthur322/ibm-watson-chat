import React from 'react'

import './styles.scss'

const Balao = props => {
  return (
    <div className="balao">{props.children || <p>Carregando . . .</p>}</div>
  )
}

export default Balao
