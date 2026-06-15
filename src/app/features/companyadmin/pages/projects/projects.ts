import { Component, inject, signal, OnInit } from '@angular/core';

import { Dialog } from '@angular/cdk/dialog';

import { CreateProject } from '../../../../forms/create-project/create-project';

import { ProjectService } from '../../../../services/project-service';

import { Project } from '../../../../interfaces/project-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements OnInit {
  private dialog = inject(Dialog);

  private projectService = inject(ProjectService);

  projects = signal<Project[]>([]);
  router = inject(Router);
  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projectService.getProjects().subscribe({
      next: (projects) => {
        this.projects.set(projects);
      },

      error: (error) => {
        console.error('Failed to load projects', error);
      },
    });
  }

  openCreateProjectModal() {
    const modal = this.dialog.open(CreateProject, {
      disableClose: true,
    });

    modal.closed.subscribe(() => {
      this.loadProjects();
    });
  }
  openProject(projectId: number) {
    this.router.navigate(['/company-admin/projects', projectId]);
  }
}
