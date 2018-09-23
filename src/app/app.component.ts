import { Component, OnInit, ViewChild } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { TargetService } from './services/target.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(FormComponent) form: FormComponent;
  title = 'datalink';
  public targets = [];

  constructor(private targetService: TargetService) {
  }

  ngOnInit() {
    this.targetService.getTargets().subscribe(targets => {
      this.targets = targets;
    });
  }

}
