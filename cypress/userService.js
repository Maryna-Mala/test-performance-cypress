export const getLoginEmail = () => {
    return Cypress.env('LOGIN_EMAIL') || ''
}

export const getInvalidPassword = () => {
    return Cypress.env('INVALID_PASSWORD') || ''
}

export const buildUserName = () => {
    return `testUser${Math.floor(Date.now() / 1000)}`
}

export const buildUserPassword = () => {
    return buildUserName()
}
