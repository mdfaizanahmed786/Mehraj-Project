const express=require('express')
const { addStudent, editStudent, deleteStudent, getAllStudents, getStudentById, enrollStudentToDepartment } = require('../controllers/student/student_controller')
const router=express.Router()


router.post('/addStudent',addStudent)
router.put('/editStudent/:studentId',editStudent)
router.delete('/deleteStudent/:studentId',deleteStudent)
router.get('/getAllStudents',getAllStudents)
router.get('/getSingleStudentById/:studentId',getStudentById)
router.put('/enrollStudentToDepartment/:studentId',enrollStudentToDepartment)


module.exports=router