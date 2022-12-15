export default function header (token) {
    return {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
}