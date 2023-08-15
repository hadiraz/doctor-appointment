export const ironLoginOptions = {
    cookieName: "LOGIN_APPOINTMENT_COOKIE",
    password: process.env.SECRET_KEY_SESSION as string,
    cookieOptions: {
        secure: process.env.NODE_ENV === "production" ? true: false,
  },
}