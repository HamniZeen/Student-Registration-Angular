import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  constructor(private fb: FormBuilder) {
    
  }
  public studentFrom = this.fb.group({
    fName: ['', Validators.required],
    lName: ['', Validators.required],
    rNumber: ['', Validators.required],
    iNumber: ['', Validators.required],
    address: ['', Validators.required],
    dOI: ['', Validators.required],
    dOG: ['', Validators.required],
    eR: ['', Validators.required],
  });
  
  onSubmit() {}
  
  get f() {
    return this.studentFrom.controls;
  }
}
