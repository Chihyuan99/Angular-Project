import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import studentsData from '../../assets/students.json';

interface Student {
  id: Number;
  name: String;
  email: String;
  gender: String;
}

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css',
})
export class DataComponent {
  students: Student[] = studentsData;
}
