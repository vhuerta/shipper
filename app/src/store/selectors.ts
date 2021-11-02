export const countTotalItems = (state: State) =>
  state.order.packages.reduce(
    (total, p) => total + p.line_items.reduce((sum, i) => sum + i.quantity, 0),
    0
  );

export const countItem = (state: State, itemId: number) =>
  state.order.packages.reduce(
    (total, p) =>
      total + p.line_items.reduce((sum, i) => (i.id === itemId ? sum + i.quantity : sum), 0),
    0
  );

export const countPackageItems = (state: State, packageId: number) =>
  state.order.packages.reduce(
    (total, p) =>
      p.id === packageId ? total + p.line_items.reduce((sum, i) => sum + i.quantity, 0) : total,
    0
  );

export const countActivePackageItems = (state: State) =>
  countPackageItems(state, state.activePackage);
