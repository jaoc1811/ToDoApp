import React from 'react'

export const DoneTableHead = props => {
  return (
    <tr>
      {!props.favorite && (
        <th className='text-center align-middle' style={{ width: '10%' }}>Actions</th>
      )}
      <th style={{ width: '45%' }} className='align-middle'>Description</th>
      <th style={{ width: '35%' }}>Date</th>
      <th className='text-center align-middle' style={{ width: '5%' }}>Favorite</th>
      <th className='text-center align-middle' style={{ width: '5%' }}>Done</th>
    </tr>
  )
}
