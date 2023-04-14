import { useState } from 'react'
import { Container } from './styles'
import { Minus, Plus } from '@phosphor-icons/react'

interface IncrementDecrementProps {
  increment(): void
  decrement(): void
  count: number
  readOnly?: boolean
}

function IncrementDecrement({ increment, decrement, count, readOnly = true }: IncrementDecrementProps) {
  return (
    <Container>
      <button onClick={() => decrement()}>
        <Minus size={14} />
      </button>

      <input type='number' value={count} readOnly={readOnly} />

      <button onClick={() => increment()}>
        <Plus size={14} />
      </button>
    </Container>
  )
}

export { IncrementDecrement }
