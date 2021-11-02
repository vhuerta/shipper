/**
 * Action creators
 */

export const resetOrder = (): RESET_ORDER => ({ type: 'RESET_ORDER' });
export const addItem = (payload: Item): ADD_ITEM => ({ type: 'ADD_ITEM', payload });
export const removeItem = (payload: Item): REMOVE_ITEM => ({ type: 'REMOVE_ITEM', payload });
export const addPackage = (): ADD_PACKAGE => ({ type: 'ADD_PACKAGE' });
export const removePackage = (payload: number): REMOVE_PACKAGE => ({ type: 'REMOVE_PACKAGE', payload });
export const setActivePackage = (payload: number): SET_ACTIVE_PACKAGE => ({ type: 'SET_ACTIVE_PACKAGE', payload });
export const addShippedOrder = (payload: ShippedOrder): ADD_SHIPPED_ORDER => ({ type: 'ADD_SHIPPED_ORDER', payload });
