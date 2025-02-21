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
}
