export namespace ModelsHome {

  export interface ArticuloI{
      title: string;
      description: string;
      image: {
        url: string;
        desc: string;
      }
      id?: string;
    }


export interface ArticleI {
  title: string;
  body: string;
  userId: number;
  id?: number;
}

}
