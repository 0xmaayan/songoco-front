// libs
import React from 'react'
import format from './format';

export default function Duration ({ className, seconds }) {
  return (
    <span dateTime={`P${Math.round(seconds)}S`} className={className}>
      {format(seconds)}
    </span>
  )
}