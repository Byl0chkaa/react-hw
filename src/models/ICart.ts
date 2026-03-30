export default interface ICart {
   id?: number;
   title?: string;
   price?: number;
   quantity?: number;
   total?: number;
   discountPercentage?: number;
   discountedTotal?: number;
   thumbnail?: string;
}