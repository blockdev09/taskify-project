import { Component, inject, signal } from '@angular/core';

import {
  form,
  FormField,
  required,
} from '@angular/forms/signals';

import {
  DialogRef,
  DIALOG_DATA,
} from '@angular/cdk/dialog';

import { WorkflowService } from '../../services/workflow-service';

@Component({
  selector: 'app-create-workflow',

  imports: [FormField],

  templateUrl: './create-workflow.html',

  styleUrl: './create-workflow.scss',
})
export class CreateWorkflow {

  workflowService =
    inject(WorkflowService);

  dialogRef =
    inject(DialogRef);

  data: any =
    inject(DIALOG_DATA);

  workflowModel = signal({

    workflowName: '',

  });

  workflowForm = form(
    this.workflowModel,
    (path) => {

      required(
        path.workflowName,
        {
          message:
            'Workflow name required',
        }
      );

    }
  );

  createWorkflow(
    event: Event
  ) {

    event.preventDefault();

    this.workflowService
      .createWorkflow({

        workflowName:
          this.workflowModel()
            .workflowName,

        projectId:
          this.data.projectId,

      })
      .subscribe(() => {

        this.dialogRef.close();

      });

  }

  closeDialog() {

    this.dialogRef.close();

  }

}