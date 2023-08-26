'use client'

export const IsAuthenticated = () => {
    return localStorage.getItem('user_id') !== null && localStorage.getItem('user_id') !== undefined;
}