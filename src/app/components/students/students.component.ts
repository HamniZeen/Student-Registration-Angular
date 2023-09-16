import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  
  public showAddStudent :boolean = false;
  public showAddStudents(){
    this.showAddStudent=true;
  }
  public hideAddStudents(){
    this.showAddStudent=false;
  }

  public isRowSelected : boolean=false;
  public rowIndex : number=0;

  public selectStudent(selectedRow:number){
    this.isRowSelected=true;
    this.rowIndex= selectedRow;

  }
  
  public students =[{
  'SeriesNo':"001",
  'RegistrationNumber':"SEU/IS/17/CS/1111",
  'IndexNumber':"CS 1234",
  'FirstName':"Harun",
  'LastName':"Zaid",
  'DateofIntake' :"2017/02/05",
  'ExpectedGraduation':"2023",
  'Address':"Western,Sri Lanka",
  'ALEnglish':56,
  
  },

{
  'SeriesNo':"002",
  'RegistrationNumber':"SEU/IS/16/CS/1111",
  'IndexNumber':"CS 904",
  'FirstName':"Harun2",
  'LastName':"Zaid2",
  'DateofIntake' :"2016/10/15",
  'ExpectedGraduation':"2022",
  'Address':"Southern,Sri Lanka",
  'ALEnglish':45,
  
  },
  {
    'SeriesNo':"003",
    'RegistrationNumber':"SEU/IS/19/CS/1111",
    'IndexNumber':"CS 1434",
    'FirstName':"Harun3",
    'LastName':"Zaid3",
    'DateofIntake' :"2019/11/25",
    'ExpectedGraduation':"2025",
    'Address':"Northern,Sri Lanka",
    'ALEnglish':39,
    
    },
    {
      'SeriesNo':"004",
      'RegistrationNumber':"SEU/IS/18/CS/1111",
      'IndexNumber':"CS 1834",
      'FirstName':"Harun1",
      'LastName':"Zaid1",
      'DateofIntake' :"2018/03/05",
      'ExpectedGraduation':"2024",
      'Address':"Eastern,Sri Lanka",
      'ALEnglish':96,
      
      }]

     
}
