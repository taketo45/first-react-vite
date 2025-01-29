import React from 'react'

const Test = ({aaa, bb}) => {
  return (
      <div>ようこそ、{aaa}さん
      {bb && <>校舎：{bb}</>}
      </div>
  )
}

export default Test