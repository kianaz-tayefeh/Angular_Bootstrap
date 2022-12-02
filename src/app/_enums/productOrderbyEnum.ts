export enum ProductOrderByEnum {
  title_asc = 'title_asc',
  title_dsc = 'title_dsc',
  id_asc = 'id_asc',
  id_dsc = 'id_dsc',
}

export const ProductOrderByLabelMapping: Record<ProductOrderByEnum, string> = {
  [ProductOrderByEnum.title_asc]: 'title_asc',
  [ProductOrderByEnum.title_dsc]: 'title_dsc',
  [ProductOrderByEnum.id_asc]: 'id_asc',
  [ProductOrderByEnum.id_dsc]: 'id_dsc',
};
