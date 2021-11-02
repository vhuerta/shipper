type Item = {
  id: number;
  quantity: number;
  sku: string;
  location: string;
};

type Package = {
  id: number;
  line_items: Item[];
};

type Order = {
  id: number;
  packages: Package[];
};

type ShippedOrder = Order & {
  shippingDate: Date;
};

type State = {
  activePackage: number;
  order: Order;
  shippedOrders: ShippedOrder[];
};

type RESET_ORDER = { type: 'RESET_ORDER' };
type ADD_ITEM = { type: 'ADD_ITEM'; payload: Item };
type REMOVE_ITEM = { type: 'REMOVE_ITEM'; payload: Item };
type ADD_PACKAGE = { type: 'ADD_PACKAGE' };
type REMOVE_PACKAGE = { type: 'REMOVE_PACKAGE'; payload: number };
type SET_ACTIVE_PACKAGE = { type: 'SET_ACTIVE_PACKAGE'; payload: number };
type ADD_SHIPPED_ORDER = { type: 'ADD_SHIPPED_ORDER'; payload: ShippedOrder };

type Action =
  | RESET_ORDER
  | ADD_ITEM
  | REMOVE_ITEM
  | ADD_PACKAGE
  | REMOVE_PACKAGE
  | SET_ACTIVE_PACKAGE
  | ADD_SHIPPED_ORDER;
