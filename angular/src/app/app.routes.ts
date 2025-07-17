import { Routes } from '@angular/router';
import {HomePage} from "./path-homepages/home-page/home-page";
import {AumMeditation} from "./meditations/aum-meditation/aum-meditation";
import {LivingMeditations} from "./meditations/living-meditations/living-meditations";
import {Events} from "./events/events";
import {ShadowPath} from "./path-homepages/shadow-path/shadow-path";
import {ShadowTouch} from "./massages/shadow-touch/shadow-touch";
import {TantraPath} from "./path-homepages/tantra-path/tantra-path";
import {EnergyPath} from "./path-homepages/energy-path/energy-path";
import {ElementsPath} from "./path-homepages/elements-path/elements-path";
import {Manu} from "./about-us/manu/manu";
import {Hakima} from "./about-us/hakima/hakima";
import {Massages} from "./massages/massages";
import {Meditations} from "./meditations/meditations";

export const routes: Routes = [
    {
        path: '',
        component: HomePage,
        title: 'Živá cesta'
    },
    {
        path: 'living-aum-meditation',
        component: AumMeditation,
    },
    {
        path: 'events',
        component: Events,
    },
    {
        path: 'massages',
        component: Massages
    },
    {
        path: 'meditations',
        component: Meditations
    },
    {
        path: 'shadow-path',
        children: [
            {
                path: '',
                component: ShadowPath,
            },
            {
                path: 'manu',
                component: Manu
            },
            {
                path: 'hakima',
                component: Hakima
            },
            {
                path: 'massages',
                component: Massages
            },
            {
                path: 'meditations',
                component: Meditations
            },
            {
                path: 'events',
                component: Events
            }
        ],
        data: { path: 'shadow' }
    },
    {
        path: 'tantra-path',
        children: [
            {
                path: '',
                component: TantraPath,
            },
            {
                path: 'manu',
                component: Manu
            },
            {
                path: 'hakima',
                component: Hakima
            },
            {
                path: 'massages',
                component: Massages
            },
            {
                path: 'meditations',
                component: Meditations
            },
            {
                path: 'events',
                component: Events
            }
        ],
        data: { path: 'tantra' }
    },
    {
        path: 'energy-path',
        children: [
            {
                path: '',
                component: EnergyPath,
            },
            {
                path: 'manu',
                component: Manu
            },
            {
                path: 'hakima',
                component: Hakima
            },
            {
                path: 'massages',
                component: Massages
            },
            {
                path: 'meditations',
                component: Meditations
            },
            {
                path: 'events',
                component: Events
            },
            {
                path: 'living-meditations',
                component: LivingMeditations,
            }
        ],
        data: { path: 'energy' }
    },
    {
        path: 'elements-path',
        children: [
            {
                path: '',
                component: ElementsPath,
            },
            {
                path: 'manu',
                component: Manu
            },
            {
                path: 'hakima',
                component: Hakima
            },
            {
                path: 'massages',
                component: Massages
            },
            {
                path: 'meditations',
                component: Meditations
            },
            {
                path: 'events',
                component: Events
            }
        ],
        data: { path: 'elements' }
    },
    {
        path: 'manu',
        component: Manu,
    },
    {
        path: 'hakima',
        component: Hakima,
    }
];
