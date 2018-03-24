import {
    Component, Input, OnInit, OnDestroy,
    ViewChild, ViewContainerRef, ViewChildren, NgModule, QueryList,
    ComponentFactoryResolver, ComponentRef
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, NgModel, NgForm } from '@angular/forms';

@Component({
    selector: 'dynamic-content',
    template: `
        <div>
            <div #container></div>
        </div>
    `
})
export class DynamicSectionsComponent implements OnInit, OnDestroy {

    @ViewChild('container', { read: ViewContainerRef })
    container: ViewContainerRef;

    @Input()
    type: string;
    
    private mappings = {
        'Text Section': TextSectionComponent,
        'Image Section': ImageSectionComponent,
        'Input Section': InputSectionComponent
    };

    private componentRef: ComponentRef<{}>;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver) {
    }
    
    ngOnInit() {
        if (this.type) {
            let componentType = this.mappings[this.type.replace(/\d+/g, "")];
;            // note: componentType must be declared within module.entryComponents
            let factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
            this.componentRef = this.container.createComponent(factory);

            // set component context
            let instance = <DynamicComponent>this.componentRef.instance;
            instance.type = this.type;            
        }
    }

    ngOnDestroy() {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
    }

}

export abstract class DynamicComponent {
    type: any;
}

@Component({
    selector: 'Text Section',
    template: `
    <div class="md-form">
        <i class="fa fa-pencil prefix grey-text"></i>
        <textarea type="text" id="{{type}}" name="{{type}}"  placeholder="Insert text here" class="form-control md-textarea md-textarea-auto" rows="3" ngModel></textarea>
    </div>`
})
export class TextSectionComponent extends DynamicComponent {
    @ViewChildren(NgModel) controls: QueryList<NgModel>;

    constructor(private parentForm: NgForm) { super(); }

    ngAfterViewInit() {
        this.controls.forEach((control: NgModel) => {
            this.parentForm.addControl(control);
        });
    }
}

@Component({
  selector: 'Image Section',
  template: `
      <input type="file" id="selectFile" #file style="display: none;" (change)="updateFile(file)"/>
      <input type="button" class="btn btn-primary" value="Select File" onclick="document.getElementById('selectFile').click();" />
      <span>&nbsp;&nbsp;{{imageFilename}}</span>
      <input class="form-control" id="{{type}}" name="{{type}}" [(ngModel)]="imageFilename" type="hidden" ngModel/>
`
})
export class ImageSectionComponent extends DynamicComponent {
  @ViewChildren(NgModel) controls: QueryList<NgModel>;

  imageFilename: any = '';

  constructor(private parentForm: NgForm) { super(); }

  ngAfterViewInit() {
    this.controls.forEach((control: NgModel) => {
      this.parentForm.addControl(control);
    });
  }

  updateFile(file: HTMLInputElement) {
    this.imageFilename = this.extractFilename(file.value);
  }

  // This is needed because the filename always returns "C:\\fakepath\\" at the beginning? Weird.
  extractFilename(path) {
    if (path.substr(0, 12) == "C:\\fakepath\\")
      return path.substr(12); // modern browser
    var x;
    x = path.lastIndexOf('/');
    if (x >= 0) // Unix-based path
      return path.substr(x + 1);
    x = path.lastIndexOf('\\');
    if (x >= 0) // Windows-based path
      return path.substr(x + 1);
    return path; // just the filename
  }
}

@Component({
  selector: 'Input Section',
  template: `
      <div class="md-form">
          <i class="fa fa-pencil prefix grey-text"></i>
          <input type="text" id="{{type}}" name="{{type}}" placeholder="Insert placeholder text here" class="form-control" ngModel>
      </div>`
})
export class InputSectionComponent extends DynamicComponent {
  @ViewChildren(NgModel) controls: QueryList<NgModel>;

  constructor(private parentForm: NgForm) { super(); }

  ngAfterViewInit() {
    this.controls.forEach((control: NgModel) => {
      this.parentForm.addControl(control);
    });
  }
}
