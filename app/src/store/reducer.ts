/**
 * Initial state and reducers
 */
export const initialOrder: Order = {
  id: 1,
  packages: [{ id: 1, line_items: [] }],
};

export const initialState: State = {
  activePackage: 1,
  order: { ...initialOrder },
  shippedOrders: [],
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'RESET_ORDER': {
      return {
        ...state,
        activePackage: 1,
        order: { ...initialOrder, id: state.shippedOrders.length + 1 },
      };
    }
    case 'ADD_ITEM': {
      const { payload } = action;

      const packages = state.order.packages.map((pack) => {
        // Not the active package, continue
        if (pack.id !== state.activePackage) return pack;

        // Try to find the item in the package
        const index = pack.line_items.findIndex((item) => item.id === payload.id);
        // This item is not in the package yet
        if (index === -1)
          return {
            ...pack,
            line_items: [
              ...pack.line_items,
              { id: payload.id, sku: payload.sku, location: payload.location, quantity: 1 },
            ],
          };

        // This item is in the package add 1 to the quantity
        const items = pack.line_items.map((item) =>
          item.id === payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        return { ...pack, line_items: items };
      });

      return { ...state, order: { ...state.order, packages } };
    }
    case 'REMOVE_ITEM': {
      const { payload } = action;
      const packages = state.order.packages.map((pack) => {
        // Not the active package, continue
        if (pack.id !== state.activePackage) return pack;
        // This item is in the package, remove 1 from the quantity, then filter empty items
        const items = pack.line_items
          .map((item) => (item.id === payload.id ? { ...item, quantity: item.quantity - 1 } : item))
          .filter((items) => items.quantity > 0);

        return { ...pack, line_items: items };
      });

      return { ...state, order: { ...state.order, packages } };
    }
    case 'ADD_PACKAGE': {
      const id = Math.max(...state.order.packages.map((p) => p.id)) + 1;
      return {
        ...state,
        order: {
          ...state.order,
          packages: [...(state.order?.packages ?? []), { id, line_items: [] }],
        },
      };
    }
    case 'REMOVE_PACKAGE': {
      return {
        ...state,
        order: {
          ...state.order,
          packages: state.order.packages.filter((pack) => pack.id !== action.payload),
        },
      };
    }
    case 'SET_ACTIVE_PACKAGE': {
      return { ...state, activePackage: action.payload };
    }
    case 'ADD_SHIPPED_ORDER': {
      return { ...state, shippedOrders: [...state.shippedOrders, action.payload] };
    }
  }
}
