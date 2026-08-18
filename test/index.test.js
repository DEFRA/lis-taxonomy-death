import { describe, expect, it } from 'vitest'

import { taxonomy } from '../src/index.js'

describe('package exports', () => {
  it('exports the death taxonomy definition', () => {
    expect(taxonomy).toEqual({
      id: 'death',
      label: 'Death',
      summary: 'Capture livestock death notifications and downstream handling.'
    })
  })
})
