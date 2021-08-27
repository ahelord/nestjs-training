

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
# get nest information
$ nest info

# generate commands
```
  generate|g [options] <schematic> [name] [path]  Generate a Nest element.
    Available schematics:
      ┌───────────────┬─────────────┬──────────────────────────────────────────────┐
      │ name          │ alias       │ description                                  │
      │ application   │ application │ Generate a new application workspace         │
      │ class         │ cl          │ Generate a new class                         │
      │ configuration │ config      │ Generate a CLI configuration file            │
      │ controller    │ co          │ Generate a controller declaration            │
      │ decorator     │ d           │ Generate a custom decorator                  │
      │ filter        │ f           │ Generate a filter declaration                │
      │ gateway       │ ga          │ Generate a gateway declaration               │
      │ guard         │ gu          │ Generate a guard declaration                 │
      │ interceptor   │ in          │ Generate an interceptor declaration          │
      │ interface     │ interface   │ Generate an interface                        │
      │ middleware    │ mi          │ Generate a middleware declaration            │
      │ module        │ mo          │ Generate a module declaration                │
      │ pipe          │ pi          │ Generate a pipe declaration                  │
      │ provider      │ pr          │ Generate a provider declaration              │
      │ resolver      │ r           │ Generate a GraphQL resolver declaration      │
      │ service       │ s           │ Generate a service declaration               │
      │ library       │ lib         │ Generate a new library within a monorepo     │
      │ sub-app       │ app         │ Generate a new application within a monorepo │
      │ resource      │ res         │ Generate a new CRUD resource                 │
```

# dependecy injection
- One object  can supply dependencies to another object

# ts-node
- It JIT transforms TypeScript into JavaScript, enabling 
you to directly execute TypeScript on Node.js without precompiling.
This is accomplished by hooking node's module loading APIs, 
enabling it to be used seamlessly alongside other Node.js tools and libraries.
  
# generate controller
nest generate co location --flat

# modules

- reduce scope to big aplication, separate in modules, each module can be maintained by different person
- each module has it own structure consisting of controllers and services and persistence layer
- dont need moquito, we can strange construction like

#DTO 
- can fully control de output from an input to the application, handle correct data to application borders
  dosent have to be fully consistent with our entities, entity that maps data to DTO and to DTO, services and persistint 
  are using entity on other hand, we want to keep our API flexible for changes but business model shouldnt change in case of 
  a required API change.
  Not all applications need DTO is especially usefull, is especially useful in two cases when will programming for enterprise 
  where API endpoint are fully specified and there is not elasticy and second case is where API changes a lot, all mappings is 
  the best way known for me. see more https://martinfowler.com/eaaCatalog/dataTransferObject.html
- DTO keeps your business logic independent on API or other infrastructure and allow us to create an application following
  domain driven design rules
  
#Mapper
- exist  in .NET package automapper can install equivalent package automapper
  Object-object mapping works by transforming an input object of one type into an output 
  object of a different type.
- Mapping code is boring. Testing mapping code is even more boring.AutoMapper provides simple configuration of types, 
  as well as simple testing of mappings. The real question may be “why use object-object mapping?” Mapping can occur 
  in many places in an application, but mostly in the boundaries between layers, such as between the UI/Domain layers, 
  or Service/Domain layers. Concerns of one layer often conflict with concerns in another, so object-object mapping 
  leads to segregated models, where concerns for each layer can affect only types in that layer.
- can help transform all DTO to entities and entities to DTO   
- can create SharedModule and store something like mapping registry not related module. 
  see more https://www.martinfowler.com/eaaCatalog/registry.html (A well-known object that other objects can use to
  find common objects and services.)
- store all mappings

#Readonly mode
- Prefix readonly is used to make a property as read-only. Read-only members can be accessed outside the class, but their value cannot be changed. Since read-only members cannot be changed outside the class, they either need to be initialized at declaration or initialized inside the class constructor.
  Example: ReadOnly Class Properties:
```
Example: ReadOnly Class Properties

class Employee {
readonly empCode: number;
empName: string;

    constructor(code: number, name: string)     {
        this.empCode = code;
        this.empName = name;
    }
}
let emp = new Employee(10, "John");
emp.empCode = 20; //Compiler Error
emp.empName = 'Bill'; 
```
# git course Nest.js series  Marluan Espiritusanto Youtube

- https://github.com/MarluanEspiritusanto/book-store-nestjs

# git course The complete NestJS developer. Enterprise Node.js framework Dawid Dominiak Udemy 

- https://github.com/dawiddominiak/nice-locations

# Migrations create

- npm run typeorm:migration:create -- -n nameMigrations

#Migrations run
- npm run typeorm:migration:run

# Migrations generate

- npm run typeorm:migration:generate -- -n updateDatabase

# Create scafolding crud

- nest g resource
- doc https://docs.nestjs.com/recipes/crud-generator 
