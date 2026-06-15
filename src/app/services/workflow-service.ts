import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Workflow } from '../interfaces/workflow';

@Injectable({
  providedIn: 'root',
})
export class WorkflowService {
  private http = inject(HttpClient);

  getWorkflows(projectId: string) {
    return this.http.get<Workflow[]>(`http://localhost:3000/workflows?projectId=${projectId}`);
  }

  createWorkflow(workflow: Omit<Workflow, 'id'>) {
    return this.http.post('http://localhost:3000/workflows', workflow);
  }
}
