<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\InstructorController;
use App\Http\Controllers\QAController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\ContactRequestController;
use App\Http\Controllers\ExamController;
use App\Http\Controllers\FeedbackFormController;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\GradeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::post('/add-course', [CourseController::class, 'addCourse']);
Route::post('/add-instructor', [InstructorController::class, 'addInstructor']);
Route::post('/add-qa', [QAController::class, 'addQA']);
Route::post('/add-student', [StudentController::class, 'addStudent']);
Route::post('/submit-form', [ContactRequestController::class, 'submitForm']);
Route::post('/add-exam', [ExamController::class, 'addExam']);
Route::post('/edit-course', [CourseController::class, 'editCourse']);
Route::post('/edit-instructor', [InstructorController::class, 'editInstructor']);
Route::post('/edit-qa', [QAController::class, 'editQA']);
Route::post('/edit-student', [StudentController::class, 'editStudent']);
Route::post('/submit-form', [FeedbackFormController::class, 'submitForm']);
Route::post('/send-email', [EmailController::class, 'sendEmail']);
Route::match(['options', 'get'], '/get-user-by-email', [UserController::class, 'getUserByEmail']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/courses', [CourseController::class, 'getCourses']);
Route::get('/instructors', [InstructorController::class, 'getInstructors']);
Route::get('/qas', [QAController::class, 'getQAs']);
Route::get('/students', [StudentController::class, 'getStudents']);
Route::post('/register', [UserController::class, 'register']);
Route::post('/add-grade', [GradeController::class, 'addGrade']);
