<?php

Route::post('/stripe/webhook', 'WebhookController@handleWebhook');

// App public files
Route::get('/avatars/{avatar}', 'FileAccessController@get_avatar')->name('avatar');
Route::get('/system/{image}', 'FileAccessController@get_system_image');

// Get public thumbnails and files
Route::get('/thumbnail/{name}/public/{token}', 'FileAccessController@get_thumbnail_public');
Route::get('/file/{name}/public/{token}', 'FileAccessController@get_file_public');
Route::get('/zip/{id}/public/{token}', 'FileAccessController@get_zip_public')->name('zip_public');

// User master,editor,visitor access to image thumbnails and file downloads
Route::group(['middleware' => ['auth:api', 'auth.shared', 'auth.master', 'scope:master,editor,visitor']], function () {
    Route::get('/thumbnail/{name}', 'FileAccessController@get_thumbnail')->name('thumbnail');
    Route::get('/file/{name}', 'FileAccessController@get_file')->name('file');
    Route::get('/zip/{id}', 'FileAccessController@get_zip')->name('zip');
});

// Get user invoice
Route::group(['middleware' => ['auth:api', 'auth.master', 'scope:master']], function () {
    Route::get('/invoice/{customer}/{token}', 'Admin\InvoiceController@show');
});

// Get og site for web crawlers
if( Crawler::isCrawler()) {
    Route::get('/shared/{token}', 'AppFunctionsController@og_site');
} else {
    Route::get('/shared/{token}', 'Sharing\FileSharingController@index');
}

Route::get('/{any?}', 'AppFunctionsController@index')->where('any', '.*');
