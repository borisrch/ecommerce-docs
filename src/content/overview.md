# Overview

The goal of this project is to implement an extensive e-commerce application that allows users to shop and checkout products using Stripe API. The backend API will be implemented with Spring Boot, and JPA + PostgreSQL for persistence. The frontend will consume the API using Angular. The project is then fully deployed on Heroku PaaS.

## Live Demo

[http://ecommerce-demo-boris.herokuapp.com](http://ecommerce-demo-boris.herokuapp.com) - Note: Application might take a while to load since it is being hosted on Heroku's free tier.

## Images

![Product](https://i.imgur.com/LmYt5eA.png)
![Cart](https://i.imgur.com/vTckAkU.png)
![Checkout](https://i.imgur.com/JXJtInl.png)

### Dashboard built with React, Redux, JWT, and Material UI ([Visit Repository](https://github.com/borisrch/ecommerce-dashboard-react))

![Dashboard](https://i.imgur.com/CFUgcCe.png)

## Building the Application

### Backend

#### Models & Repositories

Spring Data makes it possible to remove DAO implementations by requiring us to extend the Repository interface. The repositories in this project all implement the CrudRepository interface since we mainly focus on simple CRUD operations. It is also possible to implement the JpaRepostory interface to support additional features such as pagination and sorting. These interfaces allow for quick and powerful implementations which are useful to this project as there are no requirements for advanced queries on DAOs.

![Class Diagram](https://i.imgur.com/194wKFw.png)

The diagram illustrates the entities and their relationships. Order has a one-to-many relationship with OrderProduct, and OrderProduct has a many-to-one relationship with Product. The `@OneToMany` and `@ManyToOne` annotations help map these associations. A composite primary key for OrderProduct is used (OrderProductsPK) which holds the `@ManyToOne` and `@JoinColumn` annotations to Order and Product.

The `@Transient` annotations is used on methods which we do need to persist on the database, such as `getTotalOrderPrice()` as they represent calculated data and are simply utility methods.

#### Services

The service classes simply expose some CRUD methods from our repositories. The ProductService is used to create and read products to the store. Similarly, the Order and OrderProductService have create methods to create their respective entities. The StripeService exposes the createCharge() method which sends a request to the Stripe servers to issue a charge. The following sequence diagram illustrates the general flow of how Stripe will work in this application (src: [Baeldung](https://www.baeldung.com/java-stripe-api)).

![Stripe Flow](https://i.imgur.com/PgNmgLO.png)

Steps 1 to 3 on the diagram will be discussed in greater detail when describing the frontend. The StripeService essentially handles Step 4 using the Stripe library to charge the customer on their chosen products. When an unsuccessful transaction occurs (e.g. insufficient funds, stolen card, etc.), different types of StripeExceptions will be thrown. These can be caught and handled individually (e.g. RateLimitException is thrown when too many requests are sent to the API), however Stripe uses conventional HTTP response codes to indicate the success or failure of an API request. To keep things simple, we will pass the response code back to our frontend.

#### Controller

The ProductController handles `GET` requests to `"/"` and returns the collection of products we saved onto our database. The OrderController handles the `POST` request to `"/api/orders"` to create an order, which accepts an OrderForm in the `@RequestBody` which encapsulates the details of the order by the customer. The list of ProductOrders in OrderForm is validated by checking to see if they exist. The OrderForm also holds a Stripe token (retrieved from Step 3) which will be passed to our StripeService to charge the customer. An appropriate response is then returned to the frontend.

### Frontend

Try exploring the live demo or watch the video demo for a quick overview on the UI. State can be managed in Angular through Services and RxJS, which follows FLUX/Redux principles (one-way data flow and immutable data) from the React world.

The main components are `products.component.ts`, `shopping-cart.component.ts`, `orders.component.ts`, and `payment.component.ts`. Products are individually represented in the products component. The shopping-cart component stores the products selected by the user. The orders component and payment component represent the form and the final set of products and quantities chosen by the user. The payment component also holds [Stripe elements](https://stripe.com/docs/stripe-js/elements/quickstart) which helps validate card information, as well as the API calls to Stripe to retrieve the token (Step 1 to 3 in the Stripe diagram).
