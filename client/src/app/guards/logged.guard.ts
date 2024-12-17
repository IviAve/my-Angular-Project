// import { inject } from '@angular/core';
// import { Observable } from 'rxjs';

// import { ActivatedRouteSnapshot,
//   CanActivateChildFn,
//   Router,
//   RouterStateSnapshot, } from '@angular/router';

// import { UserService } from '../user/user.service';



// export const loggedGuard: CanActivateChildFn = (
//   ) => {

//  const userService = inject(UserService);
//   const router = inject(Router);

//   return new Observable<boolean>((observer) => {
//     userService.user$.subscribe((user) => {
//       if (user) {
//         router.navigate(['/home']);
//         observer.next(false);
//       } else {
//         observer.next(true);
//       }
//       observer.complete();
//     });
//   });

// };


import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivateChildFn, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../user/user.service';

export const loggedGuard: CanActivateChildFn = () => {
  const userService = inject(UserService);
  const router = inject(Router);

  return new Observable<boolean>((observer) => {
    userService.user$.subscribe((user) => {
      if (user) {
        // Ако потребителят е логнат, пренасочи го към 404 страница
        router.navigate(['/404']); // Тук можеш да го пренасочиш към конкретна страница с грешка
        observer.next(false);
      } else {
        // Ако потребителят не е логнат, позволява му да достъпи логин страницата
        observer.next(true);
      }
      observer.complete();
    });
  });
};
