export class StockItemApiModel {
	id?: number;
	name?: string;
	category?: string;
	unit?: string;
	stockQuantity?: number;
	description?: string;
	imageURL?: string;
	reorderLevel?: number;
	lastPurchasedSupplier?: string;
	lastPurchasedPrice?: number;
	lastPurchasedQuantity?: number;
}