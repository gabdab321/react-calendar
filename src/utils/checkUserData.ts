export function checkUsername(username: string): boolean {
    // username must be longer than 3 symbols and not bigger than 20 symbols

    return username.length > 3 && username.length < 20
}

export function checkPassword(password: string): boolean {
    // username must be longer than 5 symbols and not bigger than 40 symbols

    return password.length > 5 && password.length < 40
}