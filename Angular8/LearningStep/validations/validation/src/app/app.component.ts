import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      address: new FormGroup({
        country: new FormControl('by'),
        city: new FormControl('Минск', Validators.required)
      }),
      skills: new FormArray([])
    });
  }

  submit() {

    console.log('Form: ', this.form);
    const formData = {...this.form.value};
    console.log('Form data : ', formData);
    if (this.form.invalid) {
      return;
    }

  }

  setCapital() {
    const cityMap = {
      ru: 'Москва',
      ua: 'Киев',
      by: 'Минск'
    }


    const cityKey = this.form.get('address').get('country').value
    console.log(this.form.get('address').get('country').value)
    const city = cityMap[cityKey]
    console.log('city: ' , city)

    this.form.patchValue({address: {city}})
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    // (<FormArray>this.form.get('skills'))
    (this.form.get('skills') as FormArray).push(control);
  }
}

