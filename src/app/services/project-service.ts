import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Project } from '../interfaces/project-interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private http = inject(HttpClient);

  getProjects() {
    return this.http.get<Project[]>('http://localhost:3000/projects');
  }

  createProject(project: Omit<Project, 'id'>) {
    return this.http.post<Project>('http://localhost:3000/projects', project);
  }
  getProjectById(id: number) {
    return this.http.get<Project>(`http://localhost:3000/projects/${id}`);
  }
}
