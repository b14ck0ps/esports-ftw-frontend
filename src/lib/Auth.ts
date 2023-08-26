'use client'

export const IsAuthenticated = () => {

    if (typeof window !== 'undefined') {
        if (localStorage.getItem('user_id') !== null && localStorage.getItem('user_id') !== undefined) {
            return true
        }
        if (sessionStorage.getItem('user_id') !== null && sessionStorage.getItem('user_id') !== undefined) {
            return true
        }
    }
    return false
}