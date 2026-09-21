# React 19 Business Management System — Learning Roadmap

## Project Goal

Build a full-featured **Inventory & Sales Management System** using React 19.

The goal is not simply to finish an application. The project is designed to progressively teach the major React concepts and professional development practices needed to become a strong React developer.

### Core principle

> **Learn → Build → Break → Debug → Refactor → Test**

Do not try to build everything at once. Let the application architecture evolve as new React concepts are introduced.

---

# 1. Project Overview

The application will simulate a small business/ERP-style system.

## Main Modules

```text
React 19 Business Management System
│
├── Authentication
│   ├── Login
│   ├── Logout
│   ├── Protected Routes
│   └── User Session
│
├── Dashboard
│   ├── Sales Summary
│   ├── Inventory Summary
│   ├── Low Stock
│   └── Recent Transactions
│
├── Products
│   ├── Product List
│   ├── Add Product
│   ├── Edit Product
│   ├── Delete Product
│   ├── Search
│   ├── Filtering
│   └── Pagination
│
├── Inventory
│   ├── Stock In
│   ├── Stock Out
│   ├── Stock Adjustment
│   └── Inventory History
│
├── Customers
│   ├── Customer List
│   ├── Customer Details
│   └── Customer Transactions
│
├── Sales
│   ├── Create Sale
│   ├── Cart
│   ├── Checkout
│   ├── Sales History
│   └── Receipt
│
├── Reports
│   ├── Sales Report
│   ├── Inventory Report
│   └── Customer Report
│
└── Administration
    ├── Users
    ├── Roles
    ├── Permissions
    └── System Settings
```

---

# 2. Learning Roadmap

## Level 1 — React Fundamentals

### Concepts

- Components
- JSX
- Props
- State
- Event handling
- Conditional rendering
- Lists
- `map()`
- `key`
- Component composition

### First implementation

Create a simple dashboard:

```text
Dashboard
├── Header
├── Sidebar
├── ProductCard
├── SalesCard
└── LowStockCard
```

Example:

```jsx
function ProductCard({ product }) {
    return (
        <div>
            <h3>{product.name}</h3>
            <p>₱{product.price}</p>
        </div>
    );
}
```

### Goal

Understand how React components compose together to create a UI.

---

# 3. Level 2 — State Management

Build the **Products** module.

### Concepts

- `useState`
- Derived state
- State lifting
- Controlled components
- Component communication
- Immutable updates

Example:

```jsx
const [products, setProducts] = useState([]);
const [search, setSearch] = useState("");
const [selectedProduct, setSelectedProduct] = useState(null);
const [showModal, setShowModal] = useState(false);
```

Adding a product:

```jsx
function addProduct(product) {
    setProducts(prev => [
        ...prev,
        product
    ]);
}
```

### Goal

Understand how React manages UI state.

---

# 4. Level 3 — useEffect

Introduce API communication.

Suggested structure:

```text
src/
├── api/
│   └── productApi.js
│
├── components/
│   └── ProductTable.jsx
│
└── pages/
    └── Products.jsx
```

Example:

```jsx
useEffect(() => {
    loadProducts();
}, []);
```

### Concepts

- `useEffect`
- Dependency arrays
- Fetching data
- Loading states
- Error states
- Cleanup
- Synchronizing with external systems

### Goal

Understand **why** an effect is needed instead of simply memorizing the syntax.

---

# 5. Level 4 — Forms

Create:

```text
Add Product
Edit Product
```

Example:

```jsx
const [form, setForm] = useState({
    name: "",
    price: 0,
    quantity: 0
});
```

### Concepts

- Controlled inputs
- Form submission
- Validation
- Reusable form components
- Form state
- Error messages

Possible component structure:

```text
ProductForm
├── ProductName
├── Category
├── Price
├── Quantity
└── Submit
```

---

# 6. Level 5 — Routing

Turn the project into a real multi-page application.

### Routes

```text
/login

/dashboard

/products
/products/new
/products/:id
/products/:id/edit

/inventory

/customers

/sales

/reports

/settings
```

### Concepts

- React Router
- Nested routes
- Route parameters
- Navigation
- Protected routes
- Layout routes
- 404 pages

Possible structure:

```text
App
│
├── AuthLayout
│   └── Login
│
└── MainLayout
    ├── Dashboard
    ├── Products
    ├── Inventory
    ├── Customers
    ├── Sales
    └── Reports
```

---

# 7. Level 6 — Custom Hooks

Extract reusable logic.

Instead of putting product logic directly inside components, create:

```jsx
function useProducts() {
    // product logic
}
```

Then:

```jsx
const {
    products,
    loading,
    error,
    createProduct,
    updateProduct,
    deleteProduct
} = useProducts();
```

### Suggested hooks

```text
hooks/
├── useAuth.js
├── useProducts.js
├── useCustomers.js
├── useInventory.js
├── useSales.js
└── usePagination.js
```

### Concepts

- Custom hooks
- Hook composition
- Reusable business logic
- Separation of UI and logic

---

# 8. Level 7 — useRef

Use `useRef` where a DOM reference or persistent mutable value is actually needed.

Example:

```jsx
const searchInputRef = useRef(null);

function focusSearch() {
    searchInputRef.current.focus();
}
```

### Practice use cases

- Autofocus
- File inputs
- DOM measurements
- Previous values
- Third-party library integration

### Important lesson

`useRef` is not another version of `useState`.

Changing a ref does not trigger a React render.

---

# 9. Level 8 — Context

Introduce global application state.

Create:

```text
AuthContext
ThemeContext
NotificationContext
```

Example:

```jsx
const { user, logout } = useAuth();
```

### Concepts

- `createContext`
- `useContext`
- Provider pattern
- Global state
- Avoiding unnecessary prop drilling

Example:

```text
App
│
└── AuthProvider
    │
    └── MainLayout
        │
        ├── Sidebar
        ├── Header
        │   └── UserMenu
        │
        └── Dashboard
```

---

# 10. Level 9 — useReducer

Use `useReducer` for complex state transitions.

A good example is a shopping cart.

Initial state:

```jsx
const initialState = {
    items: [],
    total: 0
};
```

Actions:

```text
ADD_ITEM
REMOVE_ITEM
UPDATE_QUANTITY
CLEAR_CART
```

Reducer:

```jsx
function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state
                // ...
            };

        case "REMOVE_ITEM":
            return {
                ...state
                // ...
            };

        default:
            return state;
    }
}
```

### Goal

Understand the difference between:

```text
useState
    ↓
simple local state

useReducer
    ↓
complex state transitions
```

---

# 11. Level 10 — API and Backend

Connect React to a real backend.

Possible architecture:

```text
React 19
   │
   │ HTTP / JSON
   ▼
Node.js / Express
   │
   ▼
Database
```

Or:

```text
React 19
   │
   ▼
Rails API
   │
   ▼
Database
```

### Concepts

- REST API
- GET
- POST
- PUT/PATCH
- DELETE
- HTTP status codes
- API error handling
- Authentication
- Authorization
- CORS
- Tokens
- Refresh tokens

---

# 12. Level 11 — Authentication

Build a real login flow.

```text
Login
  ↓
Authenticate
  ↓
Receive authentication/session information
  ↓
Access protected pages
```

Example:

```text
/login
   ↓
POST /api/login
   ↓
Authentication
   ↓
/dashboard
```

Unauthorized users should be redirected to:

```text
/login
```

### Concepts

- Authentication
- Authorization
- Protected routes
- User sessions
- Role-based access
- Permissions

---

# 13. Level 12 — Role-Based Access Control

Create different user roles.

```text
Administrator
Manager
Cashier
Inventory Staff
Viewer
```

Example:

```text
Administrator
├── Users
├── Products
├── Inventory
├── Sales
└── Reports

Cashier
├── Products
└── Sales

Inventory Staff
├── Products
└── Inventory

Viewer
└── Reports
```

Permission-based rendering:

```jsx
{hasPermission("PRODUCT_DELETE") && (
    <DeleteButton />
)}
```

### Goal

Learn how enterprise applications control functionality based on permissions.

---

# 14. Level 13 — Performance

Once the application becomes larger, intentionally investigate performance problems.

### Concepts

- `memo`
- `useMemo`
- `useCallback`
- Lazy loading
- Code splitting
- Virtualization
- Avoiding unnecessary renders

Example:

```jsx
const filteredProducts = useMemo(() => {
    return products.filter(product =>
        product.name
            .toLowerCase()
            .includes(search.toLowerCase())
    );
}, [products, search]);
```

### Important

Do not use `useMemo` or `useCallback` everywhere automatically.

The goal is to understand **when optimization is useful**.

---

# 15. Level 14 — Error Handling

Make the application behave professionally.

Every major operation should account for:

```text
Loading
Empty
Error
Success
```

Example:

```text
Products
│
├── Loading...
│
├── No products found
│
├── Failed to load products
│
└── Product table
```

### Concepts

- Error boundaries
- API error handling
- Retry
- Toast notifications
- Form errors

---

# 16. Level 15 — Testing

Testing is an important part of becoming a professional React developer.

Test:

```text
Product component
Product form
Login
Cart
Authentication
API calls
```

### Concepts

- Unit testing
- Component testing
- Integration testing
- End-to-end testing

Use Playwright for end-to-end scenarios if desired.

Example:

```text
React
  ↓
Playwright
  ↓
Login
  ↓
Product
  ↓
Cart
  ↓
Checkout
```

---

# 17. Level 16 — Advanced React 19

Only explore these after the fundamentals are comfortable.

### Topics

- Actions
- `useActionState`
- `useOptimistic`
- `use`
- Form actions
- Suspense
- Server-side rendering concepts
- Server Components concepts
- React Compiler

Do not start here.

These concepts become much easier to understand after mastering the fundamentals.

---

# 18. Recommended Project Structure

Do not create the complete structure immediately. Let it evolve as the application grows.

Eventually:

```text
src/
│
├── api/
│   ├── authApi.js
│   ├── productApi.js
│   ├── inventoryApi.js
│   └── salesApi.js
│
├── assets/
│
├── components/
│   ├── common/
│   ├── forms/
│   ├── tables/
│   ├── modals/
│   └── layout/
│
├── context/
│   ├── AuthContext.jsx
│   ├── ThemeContext.jsx
│   └── NotificationContext.jsx
│
├── hooks/
│   ├── useAuth.js
│   ├── useProducts.js
│   ├── useInventory.js
│   └── usePagination.js
│
├── pages/
│   ├── Login/
│   ├── Dashboard/
│   ├── Products/
│   ├── Inventory/
│   ├── Customers/
│   ├── Sales/
│   └── Reports/
│
├── reducers/
│   └── cartReducer.js
│
├── routes/
│   ├── AppRoutes.jsx
│   └── ProtectedRoute.jsx
│
├── utils/
│   ├── formatCurrency.js
│   ├── formatDate.js
│   └── validation.js
│
├── App.jsx
└── main.jsx
```

---

# 19. Complete Learning Progression

Follow this order:

```text
React 19
   ↓
JSX
   ↓
Components
   ↓
Props
   ↓
useState
   ↓
Events
   ↓
Conditional Rendering
   ↓
Lists
   ↓
Forms
   ↓
useEffect
   ↓
API
   ↓
React Router
   ↓
Custom Hooks
   ↓
useRef
   ↓
Context
   ↓
useReducer
   ↓
Authentication
   ↓
Permissions
   ↓
Performance
   ↓
Error Handling
   ↓
Testing
   ↓
Advanced React 19
```

---

# 20. First Milestone

Do not build the entire system immediately.

Start with:

```text
React 19
   ↓
Vite
   ↓
Dashboard
   ↓
Products
   ↓
Product CRUD
```

Master these concepts first:

```text
JSX
Components
Props
useState
Events
Conditional Rendering
Lists
Forms
useEffect
```

After that, progress to:

```text
React Router
      ↓
Custom Hooks
      ↓
Context
      ↓
useReducer
      ↓
API
      ↓
Authentication
      ↓
Permissions
      ↓
Testing
      ↓
Performance
      ↓
Advanced React 19
```

---

# 21. Professional Developer Mindset

Do not measure progress only by the number of features completed.

For every feature:

1. Understand the React concept.
2. Implement it yourself.
3. Intentionally break something.
4. Debug the problem.
5. Refactor the implementation.
6. Add appropriate tests.
7. Review the component architecture.

For example:

```text
Learn useEffect
      ↓
Build Product API
      ↓
Introduce a dependency bug
      ↓
Debug the effect
      ↓
Refactor into useProducts()
      ↓
Test the hook/component
```

This process develops practical skills that tutorials often do not teach.

---

# 22. Final Goal

By the end of the project, the application should demonstrate that you can work with:

- React 19
- Component architecture
- State management
- Hooks
- Forms
- Routing
- API integration
- Authentication
- Authorization
- Permissions
- Complex state
- Error handling
- Performance
- Testing
- Reusable components
- Custom hooks
- Professional project organization

The objective is not merely:

> "I know React."

The objective is:

> **"I can design, build, debug, test, and maintain a real React application."**
