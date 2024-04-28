import {Component, ElementRef, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {RegistrationService} from "../../services/registration.service";
import {DefaultResponseType} from "../../../../types/default-response.type";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  orderForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  })
  @ViewChild('popup') popup!: TemplateRef<ElementRef>;
  dialogRef: MatDialogRef<any> | null = null;

  constructor(private fb: FormBuilder,
              private router: Router,
              public dialog: MatDialog,
              private _snackBar: MatSnackBar,
              private registrationService: RegistrationService,) {
  }

  closePopup() {
    this.dialogRef?.close();
  }

  registrationEmail() {
    if (this.orderForm.valid && this.orderForm.value.email) {
      this.dialogRef = this.dialog.open(this.popup);
      this.orderForm.reset();
    } else {
      this._snackBar.open('Enter correct email');
    }
  }

  // if (this.orderForm.valid && this.orderForm.value.email) {
  //   this.registrationService.sendEmail(this.orderForm.value.email).subscribe((data: DefaultResponseType) => {
  //     if (!data.error) {
  //       this.dialogRef = this.dialog.open(this.popup);
  //     } else {
  //       console.log(data.message);
  //       this._snackBar.open('Произошла ошибка');
  //     }
  //   })
  // } else {
  //       this._snackBar.open('Enter correct email');
  //     }

}
