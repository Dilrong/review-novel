/**
 * 카테고리 ID 이름으로 변경
 * @param id 카테고리 ID
 */
const toCategoryName = (id: number) => {
  let name = ''

  switch (id) {
    case 1:
      name = 'novel_category_fantasy'
      break
    case 2:
      name = 'novel_category_fun'
      break
    case 3:
      name = 'novel_category_meme'
      break
    case 4:
      name = 'novel_category_motivation'
      break
    case 5:
      name = 'novel_category_horror'
      break
    case 6:
      name = 'novel_category_romance'
      break
    case 7:
      name = 'novel_category_sad'
      break
    case 8:
      name = 'novel_category_sf'
      break
    default:
      name = 'novel_category_etc'
  }

  return name
}

export default toCategoryName
