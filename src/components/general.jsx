import React from 'react'
import { useParams } from 'react-router-dom';
const General = () => {
    const {channelid}=useParams()
  return (
    <div>
      General Page {channelid}
    </div>
  )
}

export default General;
