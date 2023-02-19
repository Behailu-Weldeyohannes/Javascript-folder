// const student1 = {
//   id: 1,
//   name: "Reed",
//   subjects: [],
//   addSubject(subject) {
//     this.subjects = [...this.subjects, subject];
//   },
// };

// const stud = student1.addSubject("Math");
// console.log(student1.subjects);
/*
function Student(id, name, subjects = []) {
  this.id = id;
  this.name = name;
  this.subjects = subjects;
}

Student.prototype.addSubject = function (subject) {
  this.subjects = [...this.subjects, subject];
};

const student1 = new Student(1, "Reed");
const student2 = new Student(2, "Doug");

student1.addSubject("Math");
student2.addSubject("Physics");
console.log(student2.subjects);
*/
/*
function Book(id, title, author, themes = []){
    this.id = id,
    this.title = title,
    this.author = author,
    this.themes = themes
}
Book.prototype.addTheme = function(newTheme){
    this.themes = [...this.themes, newTheme]
}
const book1 = new Book(1, "Lord of the Rings", "JRR Tolkien");
const book2 = new Book(2, "The Trial", "Franz Kafka");
book1.addTheme("Fantasy");
book2.addTheme("Corruption");

console.log(book1);
console.log(book1.title);
console.log(book2);
console.log(book2.author);
console.log(book2.themes);
*/
//Understand the Prototype chain

// prototypical inheritance - each instantiated object (from constructor function) inherits from prototype

// every object has prototype

// console.log(Object.getPrototypeOf({}));
// console.log(Object.getPrototypeOf({}).constructor);
/*
console.log(new Object());
function Student(id, name, subjects = []) {
  this.id = id;
  this.name = name;
  this.subjects = subjects;
}

const student1 = new Student(1, "Reed");

console.log(Object.getPrototypeOf(student1).constructor);
console.log(student1.__proto__);
console.log(student1.__proto__ === Student.prototype);
*/
//classes
// classes === constructor functions
// classes - create objects with shared methods
// classes === constructor functions
// console.log(typeof class Student {});
/*
class Student{
    constructor(id, name, subjects = []){
  this.id = id;
  this.name = name;
  this.subjects = subjects
    }
    getStudentName(){
        return `Student: ${This.name}`
    }
    // addSubject(){

    // }
}

const student1 = new Student(1, "Peter")
console.log(student1);
console.log(student1.getStudentName());
*/
/*
class Film{
  constructor(id, title, director, releaseYear, genres = []){
    this.id = id;
    this.title = title;
    this.director = director;
    this.releaseYear = releaseYear;
    this.genres = genres
  }
  addGenre(genre){
    this.genres = [...this.genres, genre]
    
  }
  getFilmTitle(){
 return `Film: ${this.title}`
  }
}

const myFavouriteFilm = new Film(1, "Rear Window", "Afred Hitchcock", "1954");
console.log(myFavouriteFilm.director);

myFavouriteFilm.addGenre("Thriller");
console.log(myFavouriteFilm.genres);
console.log(myFavouriteFilm.getFilmTitle());
*/
/*
// share class with extends
class Product {
  constructor(name, price, discountable) {
    this.name = name;
    this.price = price;
    this.discountable = discountable;
  }

  isDiscountable() {
    return this.discountable;
  }
}

class SaleProduct extends Product {
  constructor(name, price, discountable, percentOff) {
    super(name, price, discountable);
    this.percentOff = percentOff;
  }

  getSalePrice() {
    if (super.isDiscountable()) {
      return this.price * ((100 - this.percentOff) / 100);
    } else {
      return `${this.name} is not eligible for a discount`;
    }
  }
}

const saleProduct1 = new SaleProduct("Coffee Maker", 99, false, 20);
console.log(saleProduct1.getSalePrice());
*/
/*
// getter and setter
class Product {
  constructor(name, price, discountable) {
    this.name = name;
    this._price = price;
    this.discountable = discountable;
  }

  get price() {
    return this._price;
  }
  
  set price(price) {
    if (typeof price !== "number") {
      return this._price;
    } else {
      this._price = price; 
    }
  }
}

const product1 = new Product("Coffee Maker", 99.95, false);
product1.price = 30;
console.log(product1.price);
// product1.price = {};
// console.log(product1.clearancePrice);
// product1.price = {};
// console.log(product1.newPrice);
*/
//.bind
const isAuth = true;
const user = {
  favorites: [],
};

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.favoriteProduct = this.favoriteProduct.bind(this);
  }

  handleFavoriteProduct = () => {
    if (isAuth) {
      setTimeout(this.favoriteProduct, 1000);
    } else {
      console.log("You must be signed in to favorite products!");
    }
  };

  favoriteProduct = () => {
    user.favorites.push(this.name);
    console.log(`${this.name} favorited!`);
  };
}

const product1 = new Product("Coaster", 89.99);
product1.handleFavoriteProduct();
