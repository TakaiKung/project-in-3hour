const mongoose = require('mongoose')

const facultySchema = mongoose.Schema({
   faculty_name : {
       type : String
   },
   faculty_course : {
       type : String
   },
   start_date : {
       type : String
   },
   due_date : {
       type : String
   },
   person_info : {
       type : String
   }
})

const facultyModel = mongoose.model('faculty', facultySchema)

module.exports = facultyModel