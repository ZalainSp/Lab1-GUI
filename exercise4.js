const student = { //create student object with respective properties
    firstName: 'John', 
    lastName: 'Doe',
    studentId: '12345',
    courses: [],

    getFullName() { //method to get full name
        return student.firstName + " " + student.lastName; 
    },
    enrollCourse(courseName) { //method to enroll in a course
        this.courses.push(courseName);
    },
    getCourseCount() { //method to get number of enrolled courses
        return student.courses.length;
    }
    

};

console.log(student.getFullName()); //John Doe
student.enrollCourse('CMPS2212'); //enroll in CMPS2212
student.enrollCourse('MATH2210'); //enroll in MATH2210
console.log(student.getCourseCount()); //2
