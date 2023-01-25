import React, { useRef, useEffect } from 'react'
import { mount } from 'marketing/app'

const MarketingApp = () => {
  const ref = useRef(null)

  useEffect(() => {
    mount(ref.current)
  }, [])

  return <div ref={ref} />
}

export default MarketingApp