export async function sessionCheck (){
    const sendReq = await fetch("/api/user/userSessionData")
    const user = await sendReq.json()
    if (user) {
      return user
    } else {
      return null
    }
}