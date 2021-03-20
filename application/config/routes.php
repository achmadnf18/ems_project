<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
$route['default_controller'] = 'home';
$route['account/login'] = 'authController/auth/login';
$route['account/register'] = 'authController/auth/register';
$route['auth/login'] = 'authController/auth/doLogin';
$route['auth/logout'] = 'authController/auth/doLogout';
$route['auth/register'] = 'authController/auth/doRegister';

$route['admin/manage/invoice'] = 'adminController/admin/manageInvoice';
$route['admin/manage/invoice/getAllInvoices'] = 'adminController/invoice/getAllInvoices';
$route['admin/manage/invoice/detail/(:num)'] = 'adminController/invoice/getListDetailInvoice/$1';
$route['admin/manage/invoice/(:num)'] = 'adminController/invoice/getInvoiceById/$1';
$route['admin/manage/invoice/update/(:num)'] = 'adminController/invoice/doUpdateInvoice/$1';

$route['manage/users'] = 'adminController/admin/manageUsers';
$route['manage/users/getAllUsers'] = 'adminController/admin/getAllUsers';
$route['manage/users/(:num)'] = 'adminController/admin/getUserById/$1';
$route['manage/users/update/(:num)'] = 'adminController/admin/doUpdate/$1';

$route['vendor/manage/invoice'] = 'vendorController/vendor/manageInvoice';
$route['vendor/manage/invoice/getAllInvoices'] = 'vendorController/invoice/getAllInvoicesByVendor';
$route['vendor/manage/invoice/(:num)'] = 'vendorController/invoice/getInvoiceById/$1';
$route['vendor/manage/invoice/detail/(:num)'] = 'vendorController/invoice/getListDetailInvoice/$1';
$route['vendor/manage/invoice/create'] = 'vendorController/invoice/doCreateInvoice';
$route['vendor/manage/invoice/update/(:num)'] = 'vendorController/invoice/doUpdateInvoice/$1';
$route['vendor/manage/invoice/delete/(:num)'] = 'vendorController/invoice/doDeleteInvoice/$1';
$route['vendor/manage/invoice/confirm/(:num)'] = 'vendorController/invoice/doConfirmInvoice/$1';
$route['vendor/manage/invoice/detail/create'] = 'vendorController/invoice/doCreateDetailInvoice';
$route['vendor/manage/invoice/detail/delete/(:num)'] = 'vendorController/invoice/doDeleteDetailInvoice/$1';
$route['vendor/manage/invoice/detail/update/(:num)'] = 'vendorController/invoice/doUpdateDetailInvoice/$1';

$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;
