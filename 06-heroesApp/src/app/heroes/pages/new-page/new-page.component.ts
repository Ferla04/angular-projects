import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { filter, switchMap } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';
import { type Hero, Publisher } from '../../interfaces/hero.interface';
import { ConfirmDialogComponent } from '../../components/ConfirmDialog/ConfirmDialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
})
export class NewPageComponent implements OnInit {
  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  public heroForm = new FormGroup({
    id: new FormControl(''),
    superhero: new FormControl<string>('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl(''),
  });

  constructor(
    protected heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroById(id)))
      .subscribe((hero) => {
        if (!hero) return this.router.navigateByUrl('/heroes/list');

        this.heroForm.reset(hero);
        return;
      });
  }

  onSubmit(): void {
    if (this.heroForm.invalid) return;

    if (this.heroForm.value.id) {
      this.heroesService.updateHero(this.currentHero).subscribe((hero) => {
        this.showSnackbar(`El héroe ${hero.superhero} fue actualizado`);
      });
      return;
    }

    this.heroesService.addHero(this.currentHero).subscribe((hero) => {
      this.router.navigate(['/heroes/edit', hero.id]);
      this.showSnackbar(`El héroe ${hero.superhero} fue creado`);
    });
  }

  onDeleteHero(): void {
    if (!this.currentHero.id) throw new Error('El héroe no existe');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value,
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter((result: boolean) => result === true),
        switchMap(() => this.heroesService.deleteHero(this.currentHero.id)),
        filter((wasDeleted: boolean) => wasDeleted === true)
      )
      .subscribe(() => {
        this.router.navigate(['/heroes/list']);
        this.showSnackbar(
          `El héroe ${this.currentHero.superhero} fue eliminado`
        );
      });

    // * Otra forma de hacerlo (peor)
    // dialogRef.afterClosed().subscribe((result) => {
    //   if (!result) return;

    //   this.heroesService
    //     .deleteHero(this.currentHero.id)
    //     .subscribe((wasDeleted) => {
    //       if (wasDeleted) {
    //         this.router.navigate(['/heroes/list']);
    //         this.showSnackbar(
    //           `El héroe ${this.currentHero.superhero} fue eliminado`
    //         );
    //         return;
    //       }

    //       this.showSnackbar(
    //         `No se pudo eliminar el héroe ${this.currentHero.superhero}`
    //       );
    //     });
    // });
  }

  showSnackbar(message: string): void {
    this.snackbar.open(message, 'Cerrar', {
      duration: 2500,
    });
  }
}
