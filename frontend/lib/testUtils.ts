import casual from "casual";
// import { PAGINATION_QUERY } from '../components/Pagination';

// seed it so we get consistent results
casual.seed(777);

const fakeGuide = () => ({
  // __typename: 'Item',
  id: "abc123",
  user: null,
  altText: "New York City Skyline",
  destinations: [],
  image: {
    publicUrlTransformed: "dog.jpg",
  },
  location_info: "The biggest apple in existance",
  name: "New York City",
  status: "AVAILABLE",
});

const fakeUser = (overrides) => ({
  __typename: "User",
  id: "4234",
  name: casual.name,
  email: casual.email,
  permissions: ["ADMIN"],
  orders: [],
  cart: [],
  ...overrides,
});

const fakeOrderItem = () => ({
  __typename: "OrderItem",
  id: casual.uuid,
  image: {
    image: `${casual.word}.jpg`,
  },
  name: casual.words(),
  price: 4234,
  quantity: 1,
  description: casual.words(),
});

const fakeOrder = () => ({
  __typename: "Order",
  id: "ord123",
  charge: "ch_123",
  total: 40000,
  items: [fakeOrderItem(), fakeOrderItem()],
  createdAt: "2022-12-11T20:16:13.797Z",
  user: fakeUser(),
});

const fakeCartItem = (overrides) => ({
  __typename: "CartItem",
  id: "omg123",
  quantity: 3,
  product: fakeGuide(),
  user: fakeUser(),
  ...overrides,
});

// Fake LocalStorage
class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
}

function makePaginationMocksFor(length) {
  return [
    {
      request: { query: PAGINATION_QUERY },
      result: {
        data: {
          _allProductsMeta: {
            count: length,
          },
          itemsConnection: {
            __typename: "aggregate",
            aggregate: {
              count: length,
              __typename: "count",
            },
          },
        },
      },
    },
  ];
}

export {
  makePaginationMocksFor,
  LocalStorageMock,
  fakeGuide,
  fakeUser,
  fakeCartItem,
  fakeOrder,
  fakeOrderItem,
};
