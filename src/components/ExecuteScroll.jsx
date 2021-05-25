import React, { forwardRef } from 'react'

export const ExecuteScroll = (ref) =>
  ref.current.scrollIntoView({ behavior: 'smooth' })
