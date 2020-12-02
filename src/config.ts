interface Iconfig {
    Port: string
}
export const config: Iconfig = {
    Port: process.env.Port || '5000'
}