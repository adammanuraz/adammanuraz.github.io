import { Routes } from '@angular/router';
import {HomePage} from "./path-homepages/home-page/home-page";
import {AumMeditation} from "./meditations/aum-meditation/aum-meditation";
import {LivingMeditations} from "./meditations/living-meditations/living-meditations";
import {Events} from "./events/events";
import {ShadowPath} from "./path-homepages/shadow-path/shadow-path";
import {TantraPath} from "./path-homepages/tantra-path/tantra-path";
import {EnergyPath} from "./path-homepages/energy-path/energy-path";
import {ElementsPath} from "./path-homepages/elements-path/elements-path";
import {Manu} from "./about-us/manu/manu";
import {Hakima} from "./about-us/hakima/hakima";
import {Massages} from "./massages/massages";
import {Meditations} from "./meditations/meditations";
import {DominantMassageMan} from "./massages/dominant-massage-man/dominant-massage-man";
import {DominantMassageWoman} from "./massages/dominant-massage-woman/dominant-massage-woman";
import {TantraMassageMan} from "./massages/tantra-massage-man/tantra-massage-man";
import {TantraMassageWoman} from "./massages/tantra-massage-woman/tantra-massage-woman";
import {ShamanicMasssage} from "./massages/shamanic-masssage/shamanic-masssage";

export const routes: Routes = [
    {
        path: '',
        component: HomePage,
        title: 'Živá cesta'
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
                component: Massages,
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
                path: 'dominant-massage-man',
                component: Massages
            },
            {
                path: 'dominant-massage-woman',
                component: Massages
            }
        ],
        data: { path: 'shadow' }
    },
    {
        path: 'tantra-path',
        children: [
            {
                path: '',
                component: Massages,
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
                path: 'tantra-massage-man',
                component: Massages
            },
            {
                path: 'tantra-massage-woman',
                component: Massages
            }
        ],
        data: { path: 'tantra' }
    },
    {
        path: 'energy-path',
        children: [
            {
                path: '',
                component: Events,
            },
            {
                path: 'living-aum-meditation',
                component: AumMeditation,
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
                component: Massages,
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
                path: 'shamanic-massage',
                component: Massages
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
