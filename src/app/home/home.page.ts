import { Component } from '@angular/core';
import { Firestore, doc, setDoc, } from '@angular/fire/firestore';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ledstate: any;
  ledStatus: boolean = false;
  ledStatusL2: boolean = false;
  ledStatusL3: boolean = false;
  ledStatusL4: boolean = false;
  rutadelatabla: any;
  rutadelatabla4: any;
  rutadelatabla2: any;
  rutadelatabla3: any;
  constructor(private db: Firestore) {
  }
  /*
  async apagar() {
    this.ledstate = doc(this.db, 'controlLED', 'LED1');
    await setDoc(this.ledstate, { encender: false });
  }
  async encender() {
    this.ledstate = doc(this.db, 'controlLED', 'LED1');
    await setDoc(this.ledstate, { encender: true });
  }
*/
  async toogleState() {
    this.ledStatus = !this.ledStatus
    this.rutadelatabla = doc(this.db, "controlLed", "LED 1");
    await setDoc(this.rutadelatabla, { encender: this.ledStatus })
    console.log(this.ledStatus);

  }

  async toogleStateL2() {
    this.ledStatusL2 = !this.ledStatusL2
    this.rutadelatabla2 = doc(this.db, "controlLed", "LED 2");
    await setDoc(this.rutadelatabla2, { encender: this.ledStatusL2 })
    console.log(this.ledStatusL2);
  }

  async toogleStateL3() {
    this.ledStatusL3 = !this.ledStatusL3
    this.rutadelatabla3 = doc(this.db, "controlLed", "LED 3");
    await setDoc(this.rutadelatabla3, { encender: this.ledStatusL3 })
    console.log(this.ledStatusL3);
  }

  async toogleStateL4() {
    this.ledStatusL4 = !this.ledStatusL4
    this.ledStatusL3 = this.ledStatusL4
    this.ledStatusL2 = this.ledStatusL4
    this.ledStatus = this.ledStatusL4
    this.rutadelatabla4 = doc(this.db, "controlLed", "LED 4");
    await setDoc(this.rutadelatabla4, { encender: this.ledStatusL4})
    await setDoc(this.rutadelatabla3, { encender: this.ledStatusL3 })
    await setDoc(this.rutadelatabla2, { encender: this.ledStatusL2 })
    await setDoc(this.rutadelatabla, { encender: this.ledStatus })
    console.log(this.ledStatusL4);
  }

}
