var student = /** @class */ (function () {
    function student() {
        this.name = "jemima";
        this.id = 1234;
        this.age = 18;
    }
    Object.defineProperty(student.prototype, "get_id", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(student.prototype, "set_name", {
        get: function () {
            return this.name;
        },
        set: function (final_name) {
            this.name = final_name;
        },
        enumerable: false,
        configurable: true
    });
    return student;
}());
var Student = new student;
Student.set_name = "jemi";
console.log(Student.get_id);
console.log(Student.set_name);
// Create a book class with a private property_title.Implememt a getter and setter for the title.
var Book = /** @class */ (function () {
    function Book() {
        this._title = "aws";
    }
    Object.defineProperty(Book.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: false,
        configurable: true
    });
    return Book;
}());
var book = new Book;
book.title = "devops";
console.log(book.title);
