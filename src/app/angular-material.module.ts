import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatToolbarModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatToolbarModule
    ],
    providers: [

    ]
})

export class AngularMaterialModule {}