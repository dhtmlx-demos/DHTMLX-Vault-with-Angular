import { Vault } from '@dhx/trial-vault';
import { getData } from './data';
import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
3;
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'vault',
  styleUrls: ['./vault.component.css'],
  template: `<div #here class="widget"></div>`,
})
export class VaultComponent implements OnInit, OnDestroy {
  @ViewChild('here', { static: true }) vaultContainer!: ElementRef;

  private _vault: any;

  ngOnInit() {
    let vault = new Vault(this.vaultContainer.nativeElement, {});
    vault.data.parse(getData());

    this._vault = vault;
  }

  ngOnDestroy(): void {
    this._vault.destructor();
  }
}
