import { Component, OnInit, DoCheck, IterableDiffers, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, DoCheck {

  @ViewChild('formData') form;

  sectionList: Array<Section> = [];
  sectionListPresentable: Array<string> = [];
  sectionCount: number = 0;
  iterableDiffer: any;
  
  output: String = "";

  constructor(private _iterableDiffers: IterableDiffers) {
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);
  }

  ngOnInit() {
  }

  // Checks if the section array has changed and creates a version of it without numbers
  ngDoCheck() {
    let changes = this.iterableDiffer.diff(this.sectionList);
    if (changes) {
      this.sectionListPresentable = [];
      for (var i = 0; i < this.sectionList.length; i++) {
        this.sectionListPresentable.push(this.sectionList[i].type.replace(/\d+/g, ""));
      }
    }
  }

  addTextSection(value) {
    let newSection = new Section();
    newSection.type = `Text Section${this.sectionCount}`;
    newSection.value = value;
    this.sectionList.push(newSection);
    this.sectionCount++;
  }

  addImageSection(value) {
    let newSection = new Section();
    newSection.type = `Image Section${this.sectionCount}`;
    newSection.value = value;
    this.sectionList.push(newSection);
    this.sectionCount++;
  }

  addInputSection(value) {
    let newSection = new Section();
    newSection.type = `Input Section${this.sectionCount}`;
    newSection.value = value;
    this.sectionList.push(newSection);
    this.sectionCount++;
  }

  deleteSection(index) {
    this.sectionList.splice(index, 1);
  }

  // Submits the form data
  onSubmit(formData) {
    var jsonData = JSON.parse(JSON.stringify(formData.form.getRawValue()));
    this.output = "";
    if (this.sectionList.length > 0) {
      this.output += "{ \n";
      for (var i = 0; i < this.sectionList.length; i++) {
        this.output += "\t" + this.sectionList[i].type + ": " + jsonData[this.sectionList[i].type] + ", \n";

        console.log(jsonData[this.sectionList[i].type]);
      }
      this.output += "}";
    }
  }
}

class Section {
  type: string;
  value: string;
}
