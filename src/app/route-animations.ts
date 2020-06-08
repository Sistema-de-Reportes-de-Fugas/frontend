import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes,
  } from '@angular/animations';

export const slider =
  trigger('routeAnimations', [
    transition('inicio => reporte', slideTo('right')),
    transition('inicio => estado', slideTo('right')),
    transition('inicio => admin', slideTo('right')),
    transition('reporte => estado', slideTo('right')),
    transition('estado => reporte', slideTo('left')),
    transition('estado => admin', slideTo('right')),
    transition('admin => estado', slideTo('left')),
    transition('reporte => admin', slideTo('right')),
    transition('admin => reporte', slideTo('left'))
  ]);

function slideTo(direction) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        [direction]: 0,
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({ [direction]: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('500ms ease', style({ [direction]: '100%'}))
      ], optional),
      query(':enter', [
        animate('500ms ease', style({ [direction]: '0%'}))
      ])
    ]),
    // Normalize the page style... Might not be necessary

    // Required only if you have child animations on the page
    // query(':leave', animateChild()),
    // query(':enter', animateChild()),
  ];
}
