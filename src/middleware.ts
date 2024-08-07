export {default} from "next-auth/middleware"

export const config = {
    matcher: ["/contacto/:path*", "/api/:path*"],
}