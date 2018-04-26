import * as domain from './domain'
import CONSTANTS from './constants'

describe('horror book published on halloween', () => {
  it('returns false if genre is ok but date is not proper', () => {
    const book = {
      genre: CONSTANTS.GENRES.HORROR,
      publishedAt: new Date(2018, 1, 1)
    }

    expect(domain.checkForHorrorOnHalloween(book)).toEqual(false)
  })

  it('returns false if date is fair but genre does not match', () => {
    const book = {
      genre: CONSTANTS.GENRES.ROMANCE,
      publishedAt: new Date(2018, 9, 31)
    }

    expect(domain.checkForHorrorOnHalloween(book)).toEqual(false)
  })

  it('returns true if date is exactly 31 of october', () => {
    const book = {
      genre: CONSTANTS.GENRES.HORROR,
      publishedAt: new Date(2018, 9, 31)
    }

    expect(domain.checkForHorrorOnHalloween(book)).toEqual(true)
  })
})

describe('finance book published on last friday of a month', () => {
  it('returns false if genre is ok but date is not proper', () => {
    const book = {
      genre: CONSTANTS.GENRES.FINANCE,
      publishedAt: new Date(2018, 1, 1)
    }

    expect(domain.checkForFinanceOnMonthLastFriday(book)).toEqual(false)
  })

  it('returns false if date is fair but genre does not match', () => {
    const book = {
      genre: CONSTANTS.GENRES.ROMANCE,
      publishedAt: new Date(2018, 3, 27)
    }

    expect(domain.checkForFinanceOnMonthLastFriday(book)).toEqual(false)
  })

  it('returns true if shows horror on last friday of the month', () => {
    const book = {
      genre: CONSTANTS.GENRES.FINANCE,
      publishedAt: new Date(2018, 3, 27)
    }

    expect(domain.checkForFinanceOnMonthLastFriday(book)).toEqual(true)
  })
})