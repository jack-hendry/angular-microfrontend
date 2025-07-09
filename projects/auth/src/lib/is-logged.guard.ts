import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { AuthService } from '@@auth';

export const isLogged: CanMatchFn = () => inject(AuthService).isLogged;
