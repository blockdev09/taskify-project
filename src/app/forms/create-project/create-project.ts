import {
  Component,
  inject,
  signal
} from '@angular/core';

import {
  form,
  FormField,
  required
} from '@angular/forms/signals';

import {
  DialogRef
} from '@angular/cdk/dialog';

import {
  ProjectService
} from '../../services/project-service'

@Component({
  selector: 'app-create-project',

  imports: [FormField],

  templateUrl: './create-project.html',

  styleUrl: './create-project.scss'
})
export class CreateProject {

  dialogRef =
    inject(DialogRef);

  projectService =
    inject(ProjectService);

  projectModel = signal({

    projectName: '',

    description: ''

  });

  projectForm = form(
    this.projectModel,
    path => {

      required(
        path.projectName,
        {
          message:
            'Project Name Required'
        }
      );

      required(
        path.description,
        {
          message:
            'Description Required'
        }
      );

    }
  );

  createProject(
    event: Event
  ) {

    event.preventDefault();

    this.projectService
      .createProject(
        this.projectModel()
      )
      .subscribe(() => {

        this.dialogRef.close();

      });

  }

}