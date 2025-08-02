use("CrudDb")

db.createCollection("courses")
//create


// db.courses.insertOne({
//     name:"webdev",
//     price:0,
//     assignments:12,
//     projects:45

// })

// db.courses.insertMany([
    
//   {
//     "name": "Introduction to HTML & CSS",
//     "price": 0,
//     "assignments": 15,
//     "projects": 5
//   },
//   {
//     "name": "JavaScript Fundamentals",
//     "price": 2999,
//     "assignments": 25,
//     "projects": 10
//   },
//   {
//     "name": "React: The Complete Guide",
//     "price": 7500,
//     "assignments": 40,
//     "projects": 18
//   },
//   {
//     "name": "Node.js & Express for Backend",
//     "price": 6999,
//     "assignments": 35,
//     "projects": 15
//   },
//   {
//     "name": "Full-Stack Web Development Bootcamp",
//     "price": 19999,
//     "assignments": 60,
//     "projects": 25
//   },
//   {
//     "name": "CSS Flexbox and Grid",
//     "price": 0,
//     "assignments": 10,
//     "projects": 4
//   },
//   {
//     "name": "Databases with MongoDB",
//     "price": 4500,
//     "assignments": 20,
//     "projects": 8
//   },
//   {
//     "name": "Vue.js Fundamentals",
//     "price": 5000,
//     "assignments": 28,
//     "projects": 12
//   },
//   {
//     "name": "API Design & Development with GraphQL",
//     "price": 8999,
//     "assignments": 22,
//     "projects": 9
//   },
//   {
//     "name": "Web Accessibility (WCAG) Basics",
//     "price": 0,
//     "assignments": 12,
//     "projects": 3
//   }


// ])


//read


// let a=db.courses.find({price:0})
// console.log(a);

// console.log(a.count());
// console.log(a.toArray());


// update

// db.courses.updateOne({price:0},{$set:{price:100}})
// db.courses.updateMany({price:0},{$set:{price:1000}})


// delete

// db.courses.deleteOne({price:100})
 db.courses.deleteMany({price:1000})
