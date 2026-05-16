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
import {LivingMasssage} from "./massages/living-masssage/living-masssage";
import {AboutLivingPath} from "./about-living-path/about-living-path";
import {Learning} from "./learning/learning";
import {TantricMassageTraining} from "./learning/tantric-massage-training/tantric-massage-training";
import {DominantMassageTraining} from "./learning/dominant-massage-training/dominant-massage-training";
import {IndividualLearning} from "./learning/individual-learning/individual-learning";
import {TantricPathLearning} from "./learning/tantric-path-learning/tantric-path-learning";
import {TantricEvening} from "./events/tantric-evening/tantric-evening";
import {DominantEvening} from "./events/dominant-evening/dominant-evening";
import {MeditationEvening} from "./events/meditation-evening/meditation-evening";
import {ElementsEvening} from "./events/elements-evening/elements-evening";
import {CoupleTantraMassage} from "./massages/couple-tantra-massage/couple-tantra-massage";
import {CoupleDominantMassage} from "./massages/couple-dominant-massage/couple-dominant-massage";
import {FourHandTantraMassage} from "./massages/four-hand-tantra-massage/four-hand-tantra-massage";
import {FourHandDominantMassage} from "./massages/four-hand-dominant-massage/four-hand-dominant-massage";
import {DeArmouringMassage} from "./massages/de-armouring-massage/de-armouring-massage";
import {ShibariSession} from "./massages/shibari-session/shibari-session";

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
        path: 'events/tantricky-vecer-zive-cesty',
        component: TantricEvening,
        title: 'Večer Živé cesty tantry'
    },
    {
        path: 'events/dominantni-vecer-zive-cesty',
        component: DominantEvening,
        title: 'Večer Živé cesty stínu'
    },
    {
        path: 'events/meditacni-vecer-zive-cesty',
        component: MeditationEvening,
        title: 'Večer Živé cesty energie'
    },
    {
        path: 'events/vecer-zive-cesty-zivlu',
        component: ElementsEvening,
        title: 'Večer Živé cesty živlů'
    },
    {
        path: 'massages',
        component: Massages
    },
    {
        path: 'vyuka',
        component: Learning,
        title: 'Výuka'
    },
    {
        path: 'vyuka/certifikovany-vycvik-tantricke-masaze',
        component: TantricMassageTraining,
        title: 'Certifikovaný výcvik tantrické masáže Živé cesty'
    },
    {
        path: 'vyuka/certifikovany-vycvik-dominantni-masaze',
        component: DominantMassageTraining,
        title: 'Certifikovaný výcvik dominantní masáže Živé cesty'
    },
    {
        path: 'vyuka/individualni-vyuka',
        component: IndividualLearning,
        title: 'Individuální výuka'
    },
    {
        path: 'vyuka/tantricka-cesta',
        component: TantricPathLearning,
        title: 'Tantrická cesta'
    },
    {
        path: 'o-zive-ceste',
        component: AboutLivingPath,
        title: 'O Živé cestě'
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
                component: DominantMassageMan
            },
            {
                path: 'dominant-massage-woman',
                component: DominantMassageWoman
            },
            {
                path: 'couple-dominant-massage',
                component: CoupleDominantMassage
            },
            {
                path: 'four-hand-dominant-massage',
                component: FourHandDominantMassage
            },
            {
                path: 'shibari-session',
                component: ShibariSession
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
                component: TantraMassageMan
            },
            {
                path: 'tantra-massage-woman',
                component: TantraMassageWoman
            },
            {
                path: 'couple-tantra-massage',
                component: CoupleTantraMassage
            },
            {
                path: 'four-hand-tantra-massage',
                component: FourHandTantraMassage
            }
        ],
        data: { path: 'tantra' }
    },
    {
        path: 'energy-path',
        children: [
            {
                path: '',
                component: Massages,
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
            },
            {
                path: 'living-massage',
                component: LivingMasssage
            },
            {
                path: 'de-armouring-massage',
                component: DeArmouringMassage
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
                component: ShamanicMasssage
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
