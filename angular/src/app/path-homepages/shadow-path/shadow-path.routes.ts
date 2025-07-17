import { Routes } from '@angular/router';
import {Manu} from "../../about-us/manu/manu";

export const routes: Routes = [
    {
        path: 'shadow-path/manu',
        component: Manu,
        data: { path: 'shadow' }
    }
];
