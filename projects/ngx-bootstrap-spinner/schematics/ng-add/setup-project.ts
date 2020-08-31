/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import {
  addModuleImportToRootModule,
  getAppModulePath,
  getProjectFromWorkspace,
  getProjectMainFile,
  hasNgModuleImport,
} from '@angular/cdk/schematics';
import { getWorkspace } from '@schematics/angular/utility/config';

/** Name of the ngx-bootstrap-spinner module */
const spinnerModuleName = 'NgxSpinnerModule';

export default function (options: any): Rule {
  return (host: Tree, _context: SchematicContext) => {
    const workspace = getWorkspace(host);
    const project = getProjectFromWorkspace(workspace, options.project);

    if (project.projectType === 'application') {
      return chain([
        addSpinnerModule(options),
      ]);
    }
    return host;
  };
}

function addSpinnerModule(options: any) {
  return (host: Tree, _context: SchematicContext) => {
    const workspace = getWorkspace(host);
    const project = getProjectFromWorkspace(workspace, options.project);
    const appModulePath = getAppModulePath(host, getProjectMainFile(project));

    if (!hasNgModuleImport(host, appModulePath, spinnerModuleName)) {
      addModuleImportToRootModule(host, spinnerModuleName,
        'ngx-bootstrap-spinner', project);
    }

    return host;
  };
}
