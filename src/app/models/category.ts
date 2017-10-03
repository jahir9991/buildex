export interface Category {

  id: number,
  name: string ,
  parent: number,
  image_list: Array<string>,
  sub_category: any,
  parent_name:string,
  sub_category_list:Array<string>
}
