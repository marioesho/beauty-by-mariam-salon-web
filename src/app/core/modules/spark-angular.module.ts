import { NgModule } from '@angular/core';

import { SprkStackModule } from '@sparkdesignsystem/spark-angular';
import { SprkStackItemModule } from '@sparkdesignsystem/spark-angular';
import { SprkIconModule } from '@sparkdesignsystem/spark-angular';
import { SprkDictionaryModule } from '@sparkdesignsystem/spark-angular';

@NgModule({
  imports: [
    SprkStackModule,
    SprkStackItemModule,
    SprkIconModule,
    SprkDictionaryModule
  ],
  exports: [
    SprkStackModule,
    SprkStackItemModule,
    SprkIconModule,
    SprkDictionaryModule
  ]
})
export class SparkAngularModule { }
