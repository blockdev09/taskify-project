import { Component, inject, signal, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Dialog } from '@angular/cdk/dialog';

import { Workflow } from '../../../../interfaces/workflow';

import { WorkflowService } from '../../../../services/workflow-service';

import { CreateWorkflow } from '../../../../forms/create-workflow/create-workflow';
import { CreateTask } from '../../../../forms/create-task/create-task';
@Component({
  selector: 'app-project-board',

  templateUrl: './project-board.html',

  styleUrl: './project-board.scss',
})
export class ProjectBoard implements OnInit {
  route = inject(ActivatedRoute);

  dialog = inject(Dialog);

  workflowService = inject(WorkflowService);

  workflows = signal<Workflow[]>([]);

  projectId = ''

  ngOnInit() {
    this.projectId = String(this.route.snapshot.paramMap.get('id'));
    console.log('Prohject Id ', this.projectId);

    this.loadWorkflows();
  }

  loadWorkflows() {
    this.workflowService.getWorkflows(this.projectId).subscribe((workflows) => {
      console.log(workflows);

      this.workflows.set(workflows);
    });
  }

  openWorkflowModal() {
    const modal = this.dialog.open(CreateWorkflow, {
      data: {
        projectId: this.projectId,
      },
    });

    modal.closed.subscribe(() => {
      this.loadWorkflows();
    });
  }
  openAddTaskModal(workflowId: string) {
    console.log('Workflow Id:', workflowId);
  }
}
