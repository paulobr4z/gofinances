export interface ICategory {
  name: string;
  icon: string;
}

export default interface IDataList {
  id: string;
  type: 'positive' | 'negative';
  title: string;
  amount: string,
  category: ICategory;
  date: string;
}