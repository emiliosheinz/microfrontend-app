import React, { useRef, useEffect } from 'react'

import { mount } from 'dashboard/app'

const MarketingApp = ({ onSignIn }) => {
  const ref = useRef(null)

  useEffect(() => {
    mount(ref.current)
  }, [])

  return <div ref={ref} />
}

export default MarketingApp