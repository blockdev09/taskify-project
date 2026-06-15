import { Routes } from '@angular/router';

import { Projects } from '../projects/projects';
import { ProjectBoard } from '../project-board/project-board';

export const companyAdminRoutes: Routes = [
  {
    path: 'projects',
    component: Projects,
  },
  {
    path: 'projects/:id',
    component: ProjectBoard,
  },
];
