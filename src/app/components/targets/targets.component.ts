import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from '../form/form.component';
import { TargetService } from '../../services/target.service';
import { Target } from '../../models/Target';


@Component({
  selector: 'app-target-list',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.scss']
})
export class TargetListComponent {
  @Input() targets: Target[];

  constructor(
    private modalService: NgbModal, private targetService: TargetService) {
  }

  open() {
    const modalRef = this.modalService.open(FormComponent);
    modalRef.componentInstance.title = 'Add Target';
  }

  deleteTarget(event, id) {
    this.targetService.deleteTarget(id);
  }
}
