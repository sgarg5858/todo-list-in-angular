import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon'
import {MatSelectModule} from '@angular/material/select'

const materialComponents=[MatCardModule,MatInputModule,MatIconModule,MatButtonModule,MatFormFieldModule,MatSelectModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materialComponents
  ],
  exports:[...materialComponents]
})
export class MaterialComponentsModule { }
