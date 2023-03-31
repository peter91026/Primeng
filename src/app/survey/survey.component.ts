import { Component, OnInit} from '@angular/core';

interface work{
  work:string
  code:string
}
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']

})
export class SurveyComponent {
  selectedCategories: any[] = [];
  categories: any[] = [
    { name: 'Angular', key: 'A' },
    { name: 'Bonita', key: 'B' },
    { name: 'Database', key: 'D' },
    { name: 'Golang', key: 'G' }
  ];

  Profession:work[]=[];
  selectedProfession:work[]=[];
  ngOnInit(){
    this.Profession=[
      {work:'學生',code:'S'},
      {work:'上班族',code:'O'},
      {work:'軍人',code:'SO'},
      {work:'老師',code:'T'},
    ];

    }
    CalendarIconDemo:[]=[];
    date:Date[]=[];
    radiobuttongroupdemo:[]=[];
    ingredient:string[]=[];
    InputTextareaBasicDemo:[]=[];
    value: string[]=[];
  }


