interface IResponce {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

interface ICommentItem {
  ID: number
  Email: string
}

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments'

const getData = (url: string): Promise<Response> => {
  return fetch(url)
}

getData(COMMENTS_URL)
  .then((response: Response) => response.json())
  .then((data: IResponce[]) => {
    const items: ICommentItem[] = []

    data.forEach((item: IResponce) => {
      items.push({
        ID: item.id,
        Email: item.email,
      })
    })
    console.log(items)
  })
  .catch((e) => {
    console.error(e.message)
  })
