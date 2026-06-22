<?php

/*
 * This file is part of dlbb/flarum-ext-active-user-indicator.
 *
 * Copyright (c) 2026 DLBB.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use Flarum\Extend;

return [
    // Register the frontend asset bundles compiled for the Admin Panel
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
        
    // Register the translations folder hierarchy
    new Extend\Locales(__DIR__.'/locale'),
];