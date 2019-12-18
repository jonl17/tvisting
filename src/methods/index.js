import slugify from "slugify"

export const generateVerkefniSlug = title => {
  return "/verk/" + slugify(title).toLocaleLowerCase()
}
