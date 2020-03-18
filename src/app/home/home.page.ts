
import { Component, ViewChild, Renderer } from '@angular/core';

import { SignaturePad } from 'angular2-signaturepad/signature-pad';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  url: string;
  @ViewChild(SignaturePad, {static: false }) signaturePad: SignaturePad;

  // tslint:disable-next-line: ban-types
  private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    maxWidth: 1,
    minWidth: 1,
    canvasWidth: 300,
    canvasHeight: 200
  };

  constructor( ) {}

  drawStart() {
  }
  drawComplete() {
    console.log(this.signaturePad.toDataURL());
  }
  clear() {
    this.signaturePad.clear();
  }
  save() {
    this.url = this.signaturePad.toDataURL();
  }

}
