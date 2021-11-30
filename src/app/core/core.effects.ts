/*
 * File: core.effects.ts
 * Project: LIFE
 * Created: Friday, 26th November 2021 10:11:32 pm
 * Last Modified: Tuesday, 30th November 2021 5:31:38 pm
 * Copyright © 2021 My Custom Life
 */

import { AuthEffects } from '@life-store/auth/auth.effects';
import { UserEffects } from '@life-store/user/user.effects';
import { HealthEffects } from '@life-store/health/health.effects';
import { LoadingEffects } from '@life-store/ui-components/loading/effects/loading.effects';

export const coreEffectsAtBootstrap = [
    AuthEffects,
    HealthEffects,
    UserEffects,
    LoadingEffects
];
