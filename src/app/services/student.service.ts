import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject, Subscription } from 'rxjs';
import { find, map } from 'rxjs/operators';
import { StudentModel } from 'src/interfaces/student.model';
import { StudentMock } from 'src/assets/_mocks/studentMock';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  searchClickedEmmiter = new EventEmitter<string>();
  constructor(private https: HttpClient) {}

  getStudents(): Observable<StudentModel[]> {
    const studentsJson = localStorage.getItem('studentList');
    if (studentsJson) return of(JSON.parse(studentsJson)); // har vaght data omad ino befrest

    localStorage.setItem('studentList', JSON.stringify(StudentMock));
    return of(StudentMock);
  }

  getStudent(url: string) {
    return this.getStudents().pipe(map((s) => s.find((a) => a.url === url)));
  }

  getStudentName(id: number) {
    const studentsJson = localStorage.getItem('studentList');
    if (studentsJson) {
      let data: StudentModel[];
      data = JSON.parse(studentsJson);
      return data.find((b) => b.id === +id)?.firstName;
    }
    return '';
  }

  addStudent(studentData: StudentModel): Observable<string> {
    this.getStudents().subscribe(function (studentList) {
      studentList.push(studentData);
      localStorage.setItem('studentList', JSON.stringify(studentList));
    });

    return of('success');
  }

  updateStudent(id: number, studentData: StudentModel): Observable<string> {
    this.getStudents().subscribe(function (studentList) {
      studentList = studentList.filter((student) => student.id !== id);
      studentList.push(studentData);
      localStorage.setItem('studentList', JSON.stringify(studentList));
    });
    return of('success');
  }

  searchStundent(name: string) {
    return this.getStudents().pipe(
      map((s) =>
        s.filter((a) =>
          a.firstName.toLocaleLowerCase().includes(name.toLocaleLowerCase())
        )
      )
    );
  }
}
