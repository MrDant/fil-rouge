import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit {

  safeSrc: SafeResourceUrl;
  nomVille;
  address;

  constructor(private sanitizer: DomSanitizer) {
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/d/u/0/embed?mid=1-fp-d2OhaTkx4kTeGEoiHAwGIEO0dTOB");
    this.nomVille = 'Versailles';
    this.address = "6 rue de Bénicourt, " + this.nomVille;
   }

  ngOnInit(): void {
  }

  changeMap(ville) {
    this.nomVille = ville;
    switch (ville) {
      case 'Versailles':
        this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/d/u/0/embed?mid=1-fp-d2OhaTkx4kTeGEoiHAwGIEO0dTOB");
        this.address = "6 rue de Bénicourt, " + this.nomVille;
        break;
      case 'Lille':
        this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/d/u/0/embed?mid=1ChgK3WcNVMAKK5pmGWegGf7yk5vqFzza");
        this.address = "103 rue Pierre et Marie Curie, " + this.nomVille;
        break;
      case 'Toulon':this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/d/u/0/embed?mid=1vboZKY_6QKX_s-MLxWuAfOIUz24JQjKP");
      this.address = "2 rue Edmonde Charles Roux, " + this.nomVille;
        break;
      case 'Bordeaux':
        this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/d/u/0/embed?mid=1xVantulRmmbXP_FNwUTi-a6CCRUxzIVh");
        this.address = "3 Rue le Clos du Pre Lasse, " + this.nomVille;
        break;
      case 'Lyon':
        this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/d/u/0/embed?mid=1UBSYy35SWuk8V7ku1p0MJz04G0A1UymZ");
        this.address = "2 Rue du Pont Saint-Marcel, " + this.nomVille;
        break;
      case 'Nantes':
        this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/d/u/0/embed?mid=1rTOlUH-Q3bgFqnZ2l2qRENYgnJB5sJ0F");
        this.address = "6 rue Fontaine les Dijons, " + this.nomVille;
        break;
      default:
        console.log(`Nous n'avons pas trouvé ${ville}.`);
    }
  }
}
