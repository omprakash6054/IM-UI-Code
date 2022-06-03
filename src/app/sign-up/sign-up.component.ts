import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Options } from '@angular-slider/ngx-slider';
import { SliderValues, UserInfo } from '../models/stepper.models';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  firstStepForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    github: [null, Validators.required],
    email: [null, Validators.required],
    state: [null],

  });



  secondStepForm = this.fb.group({
    text1: [null, Validators.required],
    text2: [null, Validators.required],
    text3: [null, Validators.required]
  });
  completePercent : number = 25;


  value1: number = 70;
  value2: number = 70;
  value3: number = 70;
  options: Options = {
    floor: 0,
    ceil: 5,
    stepsArray: [
      {value : 1, legend : "1"},
      {value : 2, legend : "2"},
      {value : 3, legend : "3"},
      {value : 4, legend : "4"},
      {value : 5, legend : "5"},
    ]
  };

  thirdStepForm = this.fb.group({
    value1: [null],
    value2: [null],
    value3: [null]
  });

  states = [
    {name: 'Alabama', abbreviation: 'AL'},
    {name: 'Alaska', abbreviation: 'AK'},
    {name: 'American Samoa', abbreviation: 'AS'},
    {name: 'Arizona', abbreviation: 'AZ'},
    {name: 'Arkansas', abbreviation: 'AR'},
    {name: 'California', abbreviation: 'CA'},
    {name: 'Colorado', abbreviation: 'CO'},
    {name: 'Connecticut', abbreviation: 'CT'},
    {name: 'Delaware', abbreviation: 'DE'},
    {name: 'District Of Columbia', abbreviation: 'DC'},
    {name: 'Federated States Of Micronesia', abbreviation: 'FM'},
    {name: 'Florida', abbreviation: 'FL'},
    {name: 'Georgia', abbreviation: 'GA'},
    {name: 'Guam', abbreviation: 'GU'},
    {name: 'Hawaii', abbreviation: 'HI'},
    {name: 'Idaho', abbreviation: 'ID'},
    {name: 'Illinois', abbreviation: 'IL'},
    {name: 'Indiana', abbreviation: 'IN'},
    {name: 'Iowa', abbreviation: 'IA'},
    {name: 'Kansas', abbreviation: 'KS'},
    {name: 'Kentucky', abbreviation: 'KY'},
    {name: 'Louisiana', abbreviation: 'LA'},
    {name: 'Maine', abbreviation: 'ME'},
    {name: 'Marshall Islands', abbreviation: 'MH'},
    {name: 'Maryland', abbreviation: 'MD'},
    {name: 'Massachusetts', abbreviation: 'MA'},
    {name: 'Michigan', abbreviation: 'MI'},
    {name: 'Minnesota', abbreviation: 'MN'},
    {name: 'Mississippi', abbreviation: 'MS'},
    {name: 'Missouri', abbreviation: 'MO'},
    {name: 'Montana', abbreviation: 'MT'},
    {name: 'Nebraska', abbreviation: 'NE'},
    {name: 'Nevada', abbreviation: 'NV'},
    {name: 'New Hampshire', abbreviation: 'NH'},
    {name: 'New Jersey', abbreviation: 'NJ'},
    {name: 'New Mexico', abbreviation: 'NM'},
    {name: 'New York', abbreviation: 'NY'},
    {name: 'North Carolina', abbreviation: 'NC'},
    {name: 'North Dakota', abbreviation: 'ND'},
    {name: 'Northern Mariana Islands', abbreviation: 'MP'},
    {name: 'Ohio', abbreviation: 'OH'},
    {name: 'Oklahoma', abbreviation: 'OK'},
    {name: 'Oregon', abbreviation: 'OR'},
    {name: 'Palau', abbreviation: 'PW'},
    {name: 'Pennsylvania', abbreviation: 'PA'},
    {name: 'Puerto Rico', abbreviation: 'PR'},
    {name: 'Rhode Island', abbreviation: 'RI'},
    {name: 'South Carolina', abbreviation: 'SC'},
    {name: 'South Dakota', abbreviation: 'SD'},
    {name: 'Tennessee', abbreviation: 'TN'},
    {name: 'Texas', abbreviation: 'TX'},
    {name: 'Utah', abbreviation: 'UT'},
    {name: 'Vermont', abbreviation: 'VT'},
    {name: 'Virgin Islands', abbreviation: 'VI'},
    {name: 'Virginia', abbreviation: 'VA'},
    {name: 'Washington', abbreviation: 'WA'},
    {name: 'West Virginia', abbreviation: 'WV'},
    {name: 'Wisconsin', abbreviation: 'WI'},
    {name: 'Wyoming', abbreviation: 'WY'}
  ];

  userInfo!: UserInfo;
  sliderValues!:SliderValues;

  isLinear = true;

  stepOne: boolean = true;
  stepTwo: boolean = false;
  stepThree: boolean = false;
  stepFoor: boolean = false;
  stepFive: boolean = false;

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.firstStepForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      github: ['', Validators.required],
      email: ['', Validators.required],
      state: ['',Validators.required]    
    });

    this.secondStepForm = this.fb.group({
      text1: ['', Validators.required],
      text2: ['', Validators.required],
      text3: ['', Validators.required]
    });

    this.thirdStepForm = this.fb.group({
      value1: [null],
      value2: [null],
      value3: [null]
    });
  }

  submitFirstStep(): void {
    this.userInfo = {
      firstName: this.firstStepForm.value['firstName'],
      lastName: this.firstStepForm.value['lastName'],
      github: this.firstStepForm.value['github'],
      email: this.firstStepForm.value['email'],
      state: this.firstStepForm.value['state']
    }
    this.stepOne = false;
    this.stepTwo = true;
  }

  step2(): void {
    this.userInfo = {
      ...this.userInfo,
      desc: this.secondStepForm.value['text1'],
      desc1: this.secondStepForm.value['text2'],
      desc2: this.secondStepForm.value['text3'],
    
    }
    this.completePercent += 25;
    this.stepTwo = false;
    this.stepThree = true;
  }
  step3(): void {
    this.sliderValues = {
      ...this.sliderValues,
      value1: this.thirdStepForm.value['value1'],
      value2: this.thirdStepForm.value['value2'],
      value3: this.thirdStepForm.value['value3'],
    
    }

    this.completePercent += 25;
    this.stepThree = false;
    this.stepFoor = true;
  }
  step4(): void {
    this.completePercent += 25;
    this.stepFoor = false;
    this.stepFive = true;
  }
}

