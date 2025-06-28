<?php

use Laravel\Sanctum\Sanctum;

return [

    'stateful' => explode(',', env('SANCTUM_STATEFUL_DOMAINS', implode(',', [
        'localhost',
        'localhost:3000',
        'localhost:5173',
        '127.0.0.1',
        '127.0.0.1:8000',
        '::1'
    ]))),

    'guard' => ['web'],

    'expiration' => null,

   'middleware' => [],

];
