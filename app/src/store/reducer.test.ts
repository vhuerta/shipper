import { addItem, removeItem, resetOrder } from './actions';
import { reducer } from './reducer';

describe('Store reducer', () => {
  describe('RESET_ORDER action', () => {
    test('it should reset the order state when RESET_ORDER action is executed', () => {
      const state = {
        activePackage: 2,
        order: {
          id: 3,
          packages: [
            { id: 1, line_items: [] },
            { id: 2, line_items: [] },
          ],
        },
        shippedOrders: [],
      };

      const newState = reducer(state, resetOrder());

      expect(newState).toEqual({
        activePackage: 1,
        order: {
          id: 1,
          packages: [{ id: 1, line_items: [] }],
        },
        shippedOrders: [],
      });
    });
  });

  describe('ADD_ITEM action', () => {
    test('it should add an item to the order when ADD_ITEM action is executed', () => {
      const state = {
        activePackage: 1,
        order: {
          id: 1,
          packages: [{ id: 1, line_items: [] }],
        },
        shippedOrders: [],
      };

      const newState = reducer(
        state,
        addItem({ id: 1, quantity: 1, sku: 'red-ball', location: 'a2' })
      );

      expect(newState).toEqual({
        activePackage: 1,
        order: {
          id: 1,
          packages: [
            { id: 1, line_items: [{ id: 1, quantity: 1, sku: 'red-ball', location: 'a2' }] },
          ],
        },
        shippedOrders: [],
      });
    });
    test('it should sum 1 to quantity item to the order when ADD_ITEM action is executed and the item is already in the order', () => {
      const state = {
        activePackage: 1,
        order: {
          id: 1,
          packages: [
            { id: 1, line_items: [{ id: 1, quantity: 1, sku: 'red-ball', location: 'a2' }] },
          ],
        },
        shippedOrders: [],
      };

      const newState = reducer(
        state,
        addItem({ id: 1, quantity: 1, sku: 'red-ball', location: 'a2' })
      );

      expect(newState).toEqual({
        activePackage: 1,
        order: {
          id: 1,
          packages: [
            { id: 1, line_items: [{ id: 1, quantity: 2, sku: 'red-ball', location: 'a2' }] },
          ],
        },
        shippedOrders: [],
      });
    });
  });

  describe('REMOVE_ITEM action', () => {
    test('it should add an item to the order when REMOVE_ITEM action is executed', () => {
      const state = {
        activePackage: 1,
        order: {
          id: 1,
          packages: [
            { id: 1, line_items: [{ id: 1, quantity: 1, sku: 'red-ball', location: 'a2' }] },
          ],
        },
        shippedOrders: [],
      };

      const newState = reducer(
        state,
        removeItem({ id: 1, quantity: 1, sku: 'red-ball', location: 'a2' })
      );

      expect(newState).toEqual({
        activePackage: 1,
        order: {
          id: 1,
          packages: [{ id: 1, line_items: [] }],
        },
        shippedOrders: [],
      });
    });
    test('it should subtract 1 to quantity item to the order when REMOVE_ITEM action is executed and the item is already in the order', () => {
      const state = {
        activePackage: 1,
        order: {
          id: 1,
          packages: [
            { id: 1, line_items: [{ id: 1, quantity: 2, sku: 'red-ball', location: 'a2' }] },
          ],
        },
        shippedOrders: [],
      };

      const newState = reducer(
        state,
        removeItem({ id: 1, quantity: 1, sku: 'red-ball', location: 'a2' })
      );

      expect(newState).toEqual({
        activePackage: 1,
        order: {
          id: 1,
          packages: [
            { id: 1, line_items: [{ id: 1, quantity: 1, sku: 'red-ball', location: 'a2' }] },
          ],
        },
        shippedOrders: [],
      });
    });
  });
});
