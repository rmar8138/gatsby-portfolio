export const pathnameToTitle = pathname => {
  const paths = pathname.split("/")
  let currentLocation = paths[paths.length - 1]
  currentLocation = currentLocation
    .split("-")
    .map(item => {
      return item.charAt(0).toUpperCase() + item.slice(1)
    })
    .join(" ")

  return `Ragan Martinez | ${currentLocation || "Home"}`
}
