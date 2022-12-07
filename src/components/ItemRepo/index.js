import React from 'react'
import { ItemContainer } from './styles'

const ItemRepo = (props) => {
  const { repo,handleRemoveRepo } = props;
  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer  key={repo.id}>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a className='viewRepo' href={repo.html_url} target='_blank' rel='noreferrer'>Repositório</a>
      <a className='remove' onClick={handleRemove}>Remover</a>
      <hr />
    </ItemContainer>
  )
}

export default ItemRepo