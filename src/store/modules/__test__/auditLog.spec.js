import store from '@/store'

jest.mock('axios')

describe('AuditLog Store', () => {
  it('auditLog store', () => {
    store.dispatch('auditLog/getAuditLogByFavoriteId', 'page=1')
    expect(store.getters['auditLog/error']).toBe(null)
    expect(store.getters['auditLog/isLoading']).toBe(true)
    expect(store.getters['auditLog/data'].length).toBe(0)
  })
})